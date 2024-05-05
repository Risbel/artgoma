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
        <div className="absolute -translate-x-16 -translate-y-16">
          <Circle h={200} w={200} border={30} borderColor="#bb2d2d" />
        </div>
        <div className="absolute translate-x-16 -translate-y-16 right-0 bottom-0">
          <Circle h={200} w={200} border={30} borderColor="#bb2d2d" />
        </div>

        <div className="absolute -translate-x-40 -translate-y-16 right-0 bottom-0">
          <Circle h={100} w={100} border={20} borderColor="#bb2d2d" />
        </div>

        <div className="flex w-screen justify-center items-start pt-20">
          <FormConfirm collaborator={collaborator?.value} />
        </div>
      </div>
    </div>
  );
};

export default Confirm;

export const runtime = "edge";
