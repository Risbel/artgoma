"use client";

import { addConfirmations } from "@/actions/confirmActions";
import { useRef, useState } from "react";
import ConfirmButton from "./ConfirmButton";
import GuestsInput, { Person } from "./GuestsInput";
import { redirect } from "next/navigation";

const FormConfirm = () => {
  const [inputList, setInputList] = useState<Person[]>([]);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="flex flex-col border-2 p-4 md:p-6 rounded-xl border-red-600 bg-white backdrop-blur-3xl">
      <div className="flex flex-col w-full mb-4">
        {/* <p className="text-md md:text-2xl text-center text-primary">{form.title}</p> */}
        <p className="text-md md:text-2xl text-center">Reservar Golden Ticket</p>
      </div>

      <form
        ref={ref}
        action={async (formData) => {
          await addConfirmations(formData, inputList);
          ref.current?.reset();
          redirect("/");
        }}
        className="flex flex-col w-full"
      >
        <input type="text" hidden defaultValue={"ba688a61-71bb-4677-b180-8d40f3c82796"} name="event" />
        <div className="flex gap-2">
          <div className="flex flex-col w-2/5">
            <label className="pl-2 text-xs text-primary" htmlFor="first_name">
              {/* {form.labels.firstName} */}
              firstName
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
              placeholder={"firstName"}
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
              lastName
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
              placeholder={"lastName"}
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
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
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
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"phone"}
            min={2}
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="address">
            {/* {form.labels.address} */}
            address
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
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
            className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
            placeholder={"company"}
            min={2}
            type="text"
            name="company"
            id="company"
            autoComplete="off"
          />
        </div>
        <GuestsInput inputList={inputList} setInputList={setInputList} />

        <ConfirmButton />
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
