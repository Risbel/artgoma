import { NextRequest, NextResponse } from "next/server";

import { i18n } from "./configs/i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { verifyCollaboratorCode } from "./utils/verifyCollaboratorCode";

const PUBLIC_FILE = /\.(.*)$/;

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("collaborator");
  const response = NextResponse.next();
  const locale = getLocale(req);

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  const isCollaborator = verifyCollaboratorCode(req.nextUrl.pathname);

  if (isCollaborator) {
    if (!cookie) {
      const collaboratorFromUrl = req.nextUrl.pathname.replace("/", "");
      response.cookies.set("collaborator", collaboratorFromUrl);
    }
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, req.url));
  }

  return response;
};

export const config = {
  matcher: ["/((?!studio|api|_next/static|_next/image|favicon.ico).*)"],
};
