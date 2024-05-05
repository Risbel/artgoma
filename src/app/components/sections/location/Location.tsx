import React from "react";
import H2Location from "./H2Location";
import Image from "next/image";
import { Locate, MapPin } from "lucide-react";
import Circle from "../../circle";

const Location = () => {
  return (
    <div id="contact" className="bg-[#1c1f24] pt-32">
      <div className="flex justify-between px-24">
        <H2Location />
        <Image width={400} height={240} src={"/explore.svg"} alt="explore word image font cursive" />
      </div>
      <div className="flex justify-between items-center px-24">
        <div>
          <MapPin className="stroke-white h-48 w-48 -translate-y-32 translate-x-64" />
          <Circle
            h={155}
            w={150}
            border={30}
            borderColor="#c30a0a"
            translateX={"translate-x-16"}
            translateY={"-translate-y-40"}
          />
        </div>
        <div>
          <p className="text-white px-52">
            Ave. Ayyo Nr. 73, Local 7, 38670 <span className="text-4xl font-semibold">Adeje</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
