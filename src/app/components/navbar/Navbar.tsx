import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex fixed z-[200] md:right-16 lg:right-32 top-4">
      <div className="flex gap-6">
        <Link href="#enjoy-live">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 text-md lg:text-xl">
            ENJOY LIVE
          </span>
        </Link>
        <Link href="#conect">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 text-md lg:text-xl">
            CONNECT
          </span>
        </Link>
        <Link href="#get-inspired">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 text-md lg:text-xl">
            INSPIRE
          </span>
        </Link>
        <Link href="#contact">
          <span className="hover:text-red-400 shadow-red-100 hover:text-shadow-lg text-red-600 text-md lg:text-xl">
            CONTACT
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
