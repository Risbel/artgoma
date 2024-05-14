import Link from "next/link";
import ButtonConfirm from "../components/ButtonConfirm";
import H1Text from "./components/H1Text";
import H2Text from "./components/H2Text";
import VipDescription from "./components/VipDescription";
import Image from "next/image";
import { X } from "lucide-react";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";
import NavbarDropdown from "../components/navbar/NavbarDropdown";
import MoreAboutLink from "./components/MoreAboutLink";
import BlackBox from "./components/BlackBox";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { welcomePage } = await getDictionary(lang);

  return (
    <div
      className="flex flex-col justify-center items-center h-full gap-3 lg:gap-6 relative z-20 bg-paternSm md:bg-paternMd"
      style={{ backgroundImage: "url(/paterngoma.png)" }}
    >
      <div className="absolute top-0 px-4 md:px-8 w-screen flex justify-between items-center">
        <Link href={`/${lang}`}>
          <Image className="h-12 w-12 md:h-20 md:w-20" src="/logo-artgoma.svg" alt="logo goma" width={80} height={80} />
        </Link>
        <div className="flex gap-4">
          <NavbarDropdown />
          <Link href={`/${lang}`}>
            <X
              stroke="white"
              height={40}
              width={40}
              className="border rounded-full p-1 h-8 w-8 md:h-10 md:w-10 backdrop-blur-sm"
            />
          </Link>
        </div>
      </div>

      <BlackBox />
      <div className="relative z-50 flex flex-col justify-center items-center">
        <H1Text text1={welcomePage.h1} text2={welcomePage.h2} />
        <H2Text text={welcomePage.h3} />
        <div className="mt-4 md:m-5">
          <ButtonConfirm text={welcomePage.buttons.confirm} lang={lang} />
        </div>
        <VipDescription text={welcomePage.description} />

        <MoreAboutLink text={welcomePage.buttons.more} lang={lang} />
      </div>
    </div>
  );
};

export default page;
