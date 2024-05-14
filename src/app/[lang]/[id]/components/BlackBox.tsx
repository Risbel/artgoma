"use client";

import { Meteors } from "@/components/ui/meteors";

const BlackBox = () => {
  return (
    <div className="absolute overflow-hidden h-[400px] w-[400px] rotate-45 z-0 backdrop-blur-sm bg-black/40 shadow-lg shadow-red-900">
      <Meteors number={20} />
    </div>
  );
};

export default BlackBox;
