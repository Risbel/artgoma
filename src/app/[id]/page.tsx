import Link from "next/link";
import ButtonConfirm from "../components/ButtonConfirm";
import Carousel from "../components/sections/hero/Carousel";
import H1Text from "./components/H1Text";
import H2Text from "./components/H2Text";
import VipDescription from "./components/VipDescription";
import Image from "next/image";
import { Palette, X } from "lucide-react";

const page = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-full gap-3 lg:gap-6 relative z-20 bg-paternSm md:bg-paternMd"
      style={{ backgroundImage: "url(/paterngoma.png)" }}
    >
      <div className="absolute top-0 px-4 md:px-8 w-screen flex justify-between items-center">
        <Link href={"/"}>
          <Image className="h-12 w-12 md:h-20 md:w-20" src="/logo-artgoma.svg" alt="logo goma" width={80} height={80} />
        </Link>
        <Link href={"/"}>
          <X
            stroke="white"
            height={40}
            width={40}
            className="border rounded-full p-1 h-8 w-8 md:h-10 md:w-10 backdrop-blur-sm"
          />
        </Link>
      </div>

      <div className="absolute h-[400px] w-[400px] rotate-45 z-0 backdrop-blur-sm bg-black/20 shadow-lg shadow-red-900"></div>
      <div className="relative z-50 flex flex-col justify-center items-center">
        <H1Text />
        <H2Text />
        <div className="mt-4 md:m-5">
          <ButtonConfirm />
        </div>
        <VipDescription />

        <Link
          href={"/"}
          className="border rounded-md pl-4 pr-6 py-2 gap-3 inline-flex items-center justify-between animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-gray-50 focus:ring-gray-400 focus:ring-offset-2 hover:shadow-lg hover:shadow-red-950"
        >
          <Palette stroke="white" />
          <span className="text-white"> More about us</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
