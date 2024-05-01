import React from "react";
import H2GetInspired from "./H2GetInspired";
import GetInspiredText from "./GetInspiredText";
import GetInspiredCallToAction from "./GetInspiredCallToAction";
import Circle from "../../circle";
import Image from "next/image";

const GetInspired = () => {
  return (
    <div className="relative overflow-x-hidden bg-[#1c1f24]">
      <div className="h-full flex items-center absolute -translate-x-36">
        <Circle border={35} h={250} w={250} borderColor="#dc0101" />
      </div>
      <div className="flex items-end h-full">
        <Image
          className="absolute -right-9 bottom-1/4"
          src={"/LogoGomaVertical.svg"}
          alt="vertical logo"
          height={700}
          width={180}
        />
      </div>

      <div className="text-center pt-32 pb-16">
        <H2GetInspired />
      </div>
      <div className="relative z-20 flex flex-wrap px-32">
        <GetInspiredText />
        <GetInspiredCallToAction />
      </div>
    </div>
  );
};

export default GetInspired;
