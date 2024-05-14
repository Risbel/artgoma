import Image from "next/image";
import H2GetInTouch from "./H2GetInTouch";
import { Mail, PhoneCall, User2Icon, UserCircle2 } from "lucide-react";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";

const GetInTouch = async ({ lang }: { lang: Locale }) => {
  const { getInTouch } = await getDictionary(lang);

  return (
    <div className="bg-[#1c1f24] pb-16">
      <div className="flex justify-end px-10 lg:px-32">
        <H2GetInTouch text={getInTouch.h1} />
      </div>
      <div className="flex flex-col md:flex-row items-end justify-between pl-16 pr-10 md:pr-32 pt-6 md:pt-16">
        <Image
          className="hidden md:block"
          width={400}
          height={100}
          src={"/Logo Goma horizontal.svg"}
          alt="Logo Goma horizontal"
        />
        <div className="flex flex-col w-4/5 md:w-1/5">
          <div className="flex items-center justify-between border border-red-600 rounded-3xl overflow-hidden mb-4">
            <p className="text-white px-4 py-2">{getInTouch.contact}</p>
            <div className="bg-red-600 px-4 py-2">
              <User2Icon fill="#ffffff" stroke="none" height={40} width={40} />
            </div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="tel:+34 605 620 857" className="flex justify-between mb-2">
            <PhoneCall fill="#ffffff" stroke="none" />
            <p className="text-white font-semibold">+34 605 620 857</p>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:info@artgoma.com" className="flex justify-between">
            <Mail stroke="#ffffff" />
            <p className="text-white font-semibold">info@artgoma.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
