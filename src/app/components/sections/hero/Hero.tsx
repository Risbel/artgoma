import Image from "next/image";
import ButtonConfirm from "../../ButtonConfirm";
import Carousel from "./Carousel";
import H1hero from "./H1hero";
import Link from "next/link";
import Circle from "@/app/components/circle";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Circle
        color="border-red-600"
        position="fixed"
        z="z-[100]"
        className={
          "h-28 w-28 md:h-44 md:w-44 border-[25px] md:border-[32px] border-red-600 -translate-x-12 -translate-y-12 md:-translate-x-20 md:-translate-y-20"
        }
      />

      <Link href={"/"}>
        <Image
          className="fixed z-[60] top-4 left-[70px] md:top-6 md:left-32 h-12 w-12 md:h-20 md:w-20"
          src="/logo-artgoma.svg"
          alt="logo goma"
          width={80}
          height={80}
        />
      </Link>
      <div className="fixed z-[55] top-4 left-[68px] md:top-8 md:left-32 h-12 w-14 md:h-16 md:w-[90px] backdrop-blur-sm bg-black/20 blur-md rounded-2xl overflow-hidden"></div>

      <Carousel />

      <div className="absolute z-20 h-screen w-full flex flex-col gap-4 items-center justify-end pb-16">
        <H1hero />
        <ButtonConfirm />
      </div>
    </div>
  );
};

export default Hero;
