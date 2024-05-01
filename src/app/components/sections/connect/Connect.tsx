import Image from "next/image";
import React from "react";
import H2Connect from "./H2Connect";
import Circle from "../../circle";

const Connect = () => {
  return (
    <div
      className="relative overflow-x-hidden bg-repeat w-full"
      style={{ backgroundImage: "url(/paterngoma.png)", backgroundSize: 80 }}
    >
      <div className="flex items-center justify-between">
        <Image src="/banana.png" width={600} height={600} alt="banana svg" />
        <div className="flex flex-1 justify-center">
          <H2Connect />
        </div>{" "}
        <div className="absolute z-[100] right-0 translate-x-24">
          <Circle border={30} h={200} w={200} borderColor="#c70000" />
        </div>
        <div className="absolute z-[100] right-0 bottom-8 -translate-x-16">
          <Circle border={20} h={80} w={80} borderColor="#c70000" shadow="2xl" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
