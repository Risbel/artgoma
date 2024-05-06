import React from "react";
import FormConfirm from "./components/FormConfirm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Circle from "../components/circle";
import { cookies } from "next/headers";

const Confirm = async () => {
  const cookieStore = cookies();
  const collaborator = cookieStore.get("collaborator");

  return (
    <div
      className="relative bg-repeat overflow-x-hidden w-full"
      style={{ backgroundImage: "url(/paterngoma.png)", backgroundSize: 80 }}
    >
      <div className="relative flex h-screen overflow-hidden overflow-y-auto">
        <Link
          className="flex items-center fixed z-20  left-4 top-4 lg:left-8 lg:top-8 text-xl text-primary bg-secondary border-2 border-primary pl-2 pr-4 py-1 rounded-xl hover:bg-[#bcb9978a] transition-colors group"
          href={`/`}
        >
          <ChevronLeft className="group-hover:-translate-x-2 transition-transform duration-500" />
        </Link>
        <Circle
          color="border-red-600"
          position="absolute"
          z="z-10"
          className={
            "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 -top-32 right-0 translate-x-16 translate-y-12"
          }
        />

        <Circle
          color="border-red-600"
          position="absolute"
          z="z-10"
          className={
            "h-32 w-32 md:h-44 md:w-44 border-[20px] md:border-[32px] border-red-600 bottom-0 -left-32 translate-x-16 translate-y-12"
          }
        />

        <Circle
          color="border-red-600"
          position="absolute"
          z="z-10"
          className={
            "h-12 w-12 md:h-28 md:w-28 border-[15px] md:border-[25px] border-red-600/70 bottom-40 left-40 -translate-x-16 md:translate-x-16 translate-y-32 md:translate-y-12"
          }
        />

        <div className="flex w-screen justify-center items-start pt-20">
          <FormConfirm collaborator={collaborator?.value} />
        </div>
      </div>
    </div>
  );
};

export default Confirm;

export const runtime = "edge";
