import Image from "next/image";
import React from "react";
import H2Connect from "./H2Connect";
import Circle from "../../circle";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";

const Connect = async ({ lang }: { lang: Locale }) => {
  const { connect } = await getDictionary(lang);

  return (
    <div
      id="conect"
      className="relative bg-repeat overflow-x-hidden w-full py-24 bg-paternSm md:bg-paternMd"
      style={{ backgroundImage: "url(/paterngoma.png)" }}
    >
      <div className="flex flex-col-reverse gap-16 md:flex-row items-center justify-around">
        <Image
          className="h-[274px] w-[320px] lg:h-[549px] lg:w-[640px]"
          src="/banana.avif"
          width={600}
          height={600}
          alt="banana"
        />
        <div className="relative z-50 flex flex-1 justify-center">
          <H2Connect text={connect.h1} />
        </div>
      </div>
    </div>
  );
};

export default Connect;
