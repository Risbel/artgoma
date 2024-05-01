import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex gap-6">
        <Link href="#get-inspire">
          <span className="hover:text-red-400 text-red-600 text-xl">GET INSPIRE</span>
        </Link>
        <Link href="#about-us">
          <span className="hover:text-red-400 text-red-600 text-xl">ABOUT</span>
        </Link>
        <Link href="#get-inspired">
          <span className="hover:text-red-400 text-red-600 text-xl">INSPIRE</span>
        </Link>
        <Link href="#contact">
          <span className="hover:text-red-400 text-red-600 text-xl">CONTACT</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
