import Image from "next/image";
import H2GetInTouch from "./H2GetInTouch";
import { Mail, PhoneCall, User2Icon, UserCircle2 } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="bg-[#1c1f24] pb-16">
      <div className="flex justify-end px-32">
        <H2GetInTouch />
      </div>
      <div className="flex justify-between pl-16 pr-32 pt-16">
        <Image width={400} height={100} src={"/Logo Goma horizontal.svg"} alt="Logo Goma horizontal" />
        <div className="flex flex-col">
          <div className="flex items-center border border-red-600 rounded-3xl overflow-hidden mb-4">
            <p className="text-white px-4 py-2">CONTACT US</p>
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
