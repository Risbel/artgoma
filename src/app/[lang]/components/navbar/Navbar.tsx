import Link from "next/link";
import React from "react";
import NavbarDropdown from "./NavbarDropdown";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";

const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navbar } = await getDictionary(lang);

  return (
    <nav className="hidden md:flex fixed z-[200] md:right-16 top-4">
      <div className="flex gap-6 items-center">
        <NavbarDropdown />
        <Link href="#enjoy-live">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 lg:text-md">
            {navbar.nav[0]}
          </span>
        </Link>
        <Link href="#conect">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 lg:text-md">
            {navbar.nav[1]}
          </span>
        </Link>
        <Link href="#stories">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 lg:text-md">
            {navbar.nav[2]}
          </span>
        </Link>
        <Link href="#get-inspired">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 lg:text-md">
            {navbar.nav[3]}
          </span>
        </Link>
        <Link href="#contact">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 lg:text-md">
            {navbar.nav[4]}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
