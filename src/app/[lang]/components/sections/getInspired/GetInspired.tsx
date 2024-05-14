import React from "react";
import H2GetInspired from "./H2GetInspired";
import GetInspiredText from "./GetInspiredText";
import GetInspiredCallToAction from "./GetInspiredCallToAction";
import Circle from "../../circle";
import Image from "next/image";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";

const GetInspired = async ({ lang }: { lang: Locale }) => {
  const { inspire } = await getDictionary(lang);

  return (
    <div id="get-inspired" className="relative flex flex-col justify-center overflow-x-hidden bg-[#1c1f24]">
      <Circle
        color="border-red-600"
        position="absolute"
        z="z-40"
        className={"h-28 w-28 md:h-52 md:w-52 border-[25px] md:border-[32px] border-red-600 -translate-x-10"}
      />
      <Circle
        color="border-red-600"
        position="absolute"
        z="z-40"
        className={
          "h-16 w-16 md:h-20 md:w-20 border-[18px] md:border-[20px] border-red-600 translate-x-20 md:translate-x-64 opacity-35"
        }
      />

      <div className="flex items-end h-full">
        <Image
          className="absolute -right-9 bottom-8 opacity-25 lg:opacity-100"
          src={"/LogoGomaVertical.svg"}
          alt="vertical logo"
          height={700}
          width={180}
        />
      </div>

      <div className="text-center pt-16 md:pt-32 pb-8 md:pb-16">
        <H2GetInspired text={inspire.h1} />
      </div>
      <div className="relative z-40 flex flex-wrap px-4 md:px-16 lg:px-32">
        <GetInspiredText text={inspire.text} />
        <GetInspiredCallToAction text={inspire.caption} />
      </div>
    </div>
  );
};

export default GetInspired;
