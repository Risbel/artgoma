import React from "react";
import Circle from "../components/circle";
import Link from "next/link";

const page = () => {
  return (
    <div className="relative overflow-hidden bg-black flex justify-center items-center h-screen">
      <div className="absolute -left-16 top-0">
        <Circle h={160} w={160} border={20} borderColor="#e41414" />
      </div>
      <div className="absolute left-40 top-16">
        <Circle h={80} w={80} border={20} borderColor="#e41414" />
      </div>
      <div className="absolute -right-4 -bottom-8">
        <Circle h={80} w={80} border={20} borderColor="#e41414" />
      </div>
      <div className="relative flex flex-col items-center gap-4">
        <p className="text-white text-6">404 page not found</p>
        <Link className="text-white text-6 border border-red-600 bg-white/20 p-3 rounded-full" href={"/"}>
          Go home
        </Link>
      </div>
    </div>
  );
};

export default page;
