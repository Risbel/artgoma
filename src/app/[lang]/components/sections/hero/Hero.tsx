import Image from "next/image";
import ButtonConfirm from "../../ButtonConfirm";
import Carousel from "./Carousel";
import H1hero from "./H1hero";
import Link from "next/link";
import Circle from "../../circle";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";

const Hero = async ({ lang }: { lang: Locale }) => {
  const { home } = await getDictionary(lang);

  return (
    <div id="home" className="relative h-screen">
      <Circle
        color="border-red-600"
        position="fixed"
        z="z-[100]"
        className={
          "h-28 w-28 md:h-44 md:w-44 border-[25px] md:border-[32px] border-red-600 -translate-x-12 -translate-y-12 md:-translate-x-20 md:-translate-y-20"
        }
      />

      <Link href={`/${lang}`}>
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

      <div className="absolute z-50 h-screen w-full flex flex-col gap-4 items-center justify-end pb-24">
        <H1hero text={home.h1} />
        <Link
          href={`/${lang}/confirm`}
          className="shadow-xl hover:shadow-red-950 transition-shadow duration-300 relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffc6c6_0%,#ff0505_50%,#ff9999_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            {home.button}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
