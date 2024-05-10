import Link from "next/link";
import React from "react";

const ButtonConfirm = () => {
  return (
    <Link href={"/confirm"} className="">
      <div className="shadow-xl hover:shadow-red-950 transition-shadow duration-300 relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'">
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffc6c6_0%,#ff0505_50%,#ff9999_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
          Confirm
        </span>
      </div>
    </Link>
  );
};

export default ButtonConfirm;
