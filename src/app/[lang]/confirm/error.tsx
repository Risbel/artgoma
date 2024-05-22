"use client";

import React from "react";
import Circle from "../components/circle";
import Link from "next/link";

const error = () => {
  return (
    <div className="relative overflow-hidden bg-black flex justify-center items-center h-screen">
      <Circle
        color="border-red-600"
        position="absolute"
        z="z-50"
        className={
          "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 -top-32 right-0 translate-x-16 translate-y-12 z-50"
        }
      />

      <Circle
        color="border-red-600"
        position="absolute"
        z="z-50"
        className={
          "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 bottom-0 -left-32 translate-x-16 translate-y-12 z-50"
        }
      />

      <Circle
        color="border-red-600"
        position="absolute"
        z="z-50"
        className={
          "h-16 w-16 md:h-28 md:w-28 border-[15px] md:border-[25px] border-red-600/70 bottom-32 left-32 -translate-x-16 md:translate-x-16 translate-y-32 md:translate-y-12 z-50"
        }
      />

      <div className="relative flex flex-col items-center gap-4">
        <p className="text-white text-6">Unespected server error</p>
        <Link className="text-white text-6 border border-red-600 bg-white/20 p-3 rounded-full" href={"/"}>
          Go home
        </Link>
      </div>
    </div>
  );
};

export default error;
