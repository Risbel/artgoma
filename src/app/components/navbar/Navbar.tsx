import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 right-32 top-4">
      <div className="flex gap-6">
        <Link href="#enjoy-live">
          <span className="hover:text-red-400 text-red-600 text-xl">ENJOY LIVE</span>
        </Link>
        <Link href="#conect">
          <span className="hover:text-red-400 text-red-600 text-xl">CONNECT</span>
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
