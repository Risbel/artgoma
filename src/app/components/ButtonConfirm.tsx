import Link from "next/link";
import React from "react";

const ButtonConfirm = () => {
  return (
    <Link
      href={"/confirm"}
      className="hover:-translate-y-1 transition-transform duration-300 bg-black/40 backdrop-blur-sm px-4 md:px-8 py-2 md:py-2 border-2 border-red-700 rounded-3xl"
    >
      <span className="text-white tracking-wider">Confirm</span>
    </Link>
  );
};

export default ButtonConfirm;
