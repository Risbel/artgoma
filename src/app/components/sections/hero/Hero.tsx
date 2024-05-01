import Image from "next/image";
import ButtonConfirm from "./ButtonConfirm";
import Carousel from "./Carousel";
import H1hero from "./H1hero";
import Link from "next/link";
import Circle from "@/app/components/circle";
import Navbar from "../../navbar";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="fixed z-50 -translate-x-20 -translate-y-20">
        <Circle h={180} w={180} border={40} borderColor="#ff0000" />
      </div>

      <Link href={"/"}>
        <Image className="fixed z-50 top-6 left-32" src="/logo-artgoma.svg" alt="logo goma" width={80} height={80} />
      </Link>
      <div className="fixed z-40 top-4 left-32 h-16 w-24 bg-black/20 blur-md"></div>

      <div className="fixed z-50 right-32 top-4">
        <Navbar />
      </div>
      <div className="fixed z-20 h-14 w-1/2 right-0 bg-gradient-to-l from-black via-black to-transparent"></div>

      <Carousel />

      <div className="absolute z-20 h-screen w-full flex flex-col gap-4 items-center justify-end pb-16">
        <H1hero />
        <ButtonConfirm />
      </div>
    </div>
  );
};

export default Hero;
