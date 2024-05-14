import React from "react";
import H2Location from "./H2Location";
import Image from "next/image";
import { Locate, MapPin } from "lucide-react";
import Circle from "../../circle";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";

const Location = async ({ lang }: { lang: Locale }) => {
  const { contact } = await getDictionary(lang);

  return (
    <div id="contact" className="bg-[#1c1f24] pt-16 md:pt-32">
      <div className="flex flex-col md:flex-row justify-between px-10 md:px-16 lg:px-32 text-center">
        <H2Location text={contact.h1} />
        <Image
          className="hidden md:block h-[200px] w-[240px] lg:h-[300px] lg:w-[440px]"
          width={400}
          height={240}
          src={"/explore.svg"}
          alt="explore word image font cursive"
        />
      </div>
      <div className="flex gap-8 flex-col md:flex-row justify-between items-center px-4 py-8">
        <div className="flex justify-center w-full">
          <div>
            <MapPin className="stroke-white h-20 w-20 md:h-48 md:w-48 md:-translate-y-32 md:translate-x-2" />
            <Circle
              color="border-red-600"
              position="absolute"
              z="z-10"
              className={
                "h-[42px] w-10 md:h-32 md:w-32 border-[10px] md:border-[28px] border-red-600 -translate-x-10 -translate-y-4 md:-translate-x-28 md:-translate-y-40"
              }
            />
          </div>
          <div>
            <Image
              className="md:hidden translate-x-8"
              width={150}
              height={70}
              src={"/explore.svg"}
              alt="explore word image font cursive"
            />
          </div>
        </div>
        <div>
          <p className="text-xs md:text-base text-center md:text-start text-nowrap text-white relative md:-translate-x-64 lg:-translate-x-96">
            Av. Ayyo Nr. 73, Local 7, 38670 <span className="text-2xl md:text-4xl font-semibold">Adeje</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
