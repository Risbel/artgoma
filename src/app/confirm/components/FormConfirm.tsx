"use client";

import { addConfirmations } from "@/actions/confirmActions";
import { useRef, useState } from "react";
import GuestsInput, { Person } from "./GuestsInput";
import { redirect } from "next/navigation";
import TimeSelector from "./TimeSelector";
import { DateSelector } from "./DateSelector";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const FormConfirm = () => {
  const [inputList, setInputList] = useState<Person[]>([]);
  const ref = useRef<HTMLFormElement>(null);
  const inputRef: any = useRef<HTMLInputElement>(null);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col border-2 p-4 md:p-6 rounded-xl border-red-600 bg-white backdrop-blur-3xl">
      <div className="flex flex-col w-full mb-4">
        {/* <p className="text-md md:text-2xl text-center text-primary">{form.title}</p> */}
        <p className="text-md md:text-2xl text-center">Reservar Golden Ticket</p>
      </div>

      <form
        ref={ref}
        action={async (formData) => {
          const data = await addConfirmations(formData, inputList);
          if (data?.statusText === "error") {
            inputRef.current.focus();
            return;
          }
          ref.current?.reset();
          redirect("/");
        }}
        className="flex flex-col w-full"
      >
        <input type="text" hidden defaultValue={localStorage.getItem("collaborator") ?? ""} name="collaborator" />
        <div className="flex gap-2">
          <div className="flex flex-col w-2/5">
            <label className="pl-2 text-xs text-primary" htmlFor="first_name">
              {/* {form.labels.firstName} */}
              first name
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md h-6 md:h-8 text-xs md:text-base text-[#383529] border-primary"
              placeholder={"first name"}
              min={2}
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="pl-2 text-xs text-primary" htmlFor="last_name">
              {/* {form.labels.lastName} */}
              last name
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-6 md:h-8 text-xs md:text-base text-[#383529] border-primary"
              placeholder={"last name"}
              min={2}
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="additional-name"
            />
          </div>
        </div>
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="email">
            {/* {form.labels.email} */}
            email
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-6 md:h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"email"}
            min={2}
            type="email"
            name="email"
            id="email"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="phone">
            {/* {form.labels.phone} */}
            phone
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-6 md:h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"phone"}
            min={2}
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="pl-2 text-xs text-primary" htmlFor="date">
              {/* {form.labels.phone} */}
              wath day do you preffer
            </label>
            <DateSelector inputRef={inputRef} />
          </div>
          <div className="flex-1">
            <label className="text-xs text-primary" htmlFor="time">
              {/* {form.labels.time} */}
              wath time do you preffer
            </label>
            <TimeSelector />
          </div>
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="address">
            {/* {form.labels.address} */}
            address
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-6 md:h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"address"}
            min={2}
            type="text"
            name="address"
            id="address"
            autoComplete="address-level1"
          />
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="company">
            {/* {form.labels.company} */}
            company
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-6 md:h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"company"}
            min={2}
            type="text"
            name="company"
            id="company"
            autoComplete="off"
          />
        </div>
        <GuestsInput inputList={inputList} setInputList={setInputList} />

        <Button className="my-2 bg-black/70 border-2 border-red-700 hover:bg-black/60 rounded-full p-2" type="submit">
          <span className="font-semibold text-white">
            {!pending ? `${"confirm"}` : <Loader2 className="animate-spin stroke-secondary" />}
          </span>
        </Button>
      </form>
    </div>
  );
};

export default FormConfirm;

export interface IPostSubscriptionsResp {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  company: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
