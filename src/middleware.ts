import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const verifyRegex = (cadena: string) => {
  const regex = /\/[a-zA-Z0-9]{5}$/;

  if (regex.test(cadena)) {
    return true;
  } else {
    return false;
  }
};

export const middleware = (req: NextRequest, res: NextResponse) => {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("collaborator");
  const response = NextResponse.next();

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }

  const isCollaborator = verifyRegex(req.nextUrl.pathname);

  if (isCollaborator) {
    if (!cookie) {
      const collaboratorFromUrl = req.nextUrl.pathname.replace("/", "");
      response.cookies.set("collaborator", collaboratorFromUrl);
    }
  }

  if (!isCollaborator && req.nextUrl.pathname !== "/") {
    return NextResponse.rewrite(new URL("/404", req.url));
  }

  return response;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|confirm|generate-qr).*)"],
};
