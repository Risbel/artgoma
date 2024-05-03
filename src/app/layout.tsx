import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CollaboratorProvider from "@/providers/CollaboratorProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art GoMA",
  description: "Welcome to GoMa gallery! UNIQUE ART EXPERIENCE IN TENERIFE",
  keywords: ["Art Goma", "GoMA", "Arte en Tenerife", "Galería GoMA"],
  authors: [{ name: "Karen" }],
  creator: "Karen",
  openGraph: {
    title: "Art GoMa",
    description: "Welcome to GoMa gallery! UNIQUE ART EXPERIENCE IN TENERIFE",
    url: "https://artgoma.vercel.app",
    siteName: "Art GoMA",
    images: [
      {
        url: "https://artgoma.vercel.app/bg-black-logo-goma.png  ",
        width: 800,
        height: 800,
        alt: "ArtExperience",
      },
    ],
    type: "website",
    locale: "es",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CollaboratorProvider>
        <body className={montserrat.className}>{children}</body>
      </CollaboratorProvider>
    </html>
  );
}
