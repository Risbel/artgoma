"use client";

import { addConfirmations } from "@/actions/confirmActions";
import { useRef, useState } from "react";
import GuestsInput, { Person } from "./GuestsInput";
import { redirect } from "next/navigation";
import TimeSelector from "./TimeSelector";
import { DateSelector } from "./DateSelector";
import ButtonConfirm from "./ButtonConfirm";
import { useDictionary } from "@/providers/DictionaryProvider";
import { Check } from "lucide-react";

const FormConfirm = ({ collaborator }: { collaborator: string | undefined }) => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [inputList, setInputList] = useState<Person[]>([]);
  const ref = useRef<HTMLFormElement>(null);
  const inputRef: any = useRef<HTMLInputElement>(null);
  const { form } = useDictionary();

  const [selectedDate, setSelectedDate] = useState<any>();

  return (
    <div className="relative z-50 flex flex-col p-4 md:p-6 rounded-xl bg-white backdrop-blur-3xl shadow-xl shadow-gray-800">
      <div className="flex flex-col w-full mb-4">
        <p className="text-md md:text-2xl text-center">{form.title}</p>
      </div>

      <form
        ref={ref}
        action={async (formData) => {
          const data = await addConfirmations(formData, inputList);

          if (data.message === "error date") {
            inputRef.current.focus();
            return;
          }
          if (data.status === 400) {
            setError(data.message);
            return;
          }

          setError(null);
          setSuccess(true);

          ref.current?.reset();
          redirect("/");
        }}
        className="flex flex-col w-full"
      >
        <input type="text" hidden defaultValue={collaborator ?? ""} name="collaborator" />
        <div className="flex gap-2">
          <div className="flex flex-col w-2/5">
            <label className="pl-2 text-xs text-primary" htmlFor="first_name">
              {form.labels.firstName}
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md h-8 text-xs md:text-base text-[#383529] border-primary"
              placeholder={form.placeHolder.firstName}
              min={2}
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="pl-2 text-xs text-primary" htmlFor="last_name">
              {form.labels.lastName}
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
              placeholder={form.placeHolder.lastName}
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
            {form.labels.email}
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={form.placeHolder.email}
            min={2}
            type="email"
            name="email"
            id="email"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="phone">
            {form.labels.phone}
          </label>
          <input
            required
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={form.placeHolder.phone}
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
              {form.labels.day}
            </label>
            <DateSelector inputRef={inputRef} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </div>
          <div className="flex-1">
            <label className="text-xs text-primary" htmlFor="time">
              {form.labels.time}
            </label>
            <TimeSelector selectedDate={selectedDate} />
          </div>
        </div>

        <div>
          <label className="pl-2 text-xs text-primary" htmlFor="company">
            {form.labels.company}
          </label>
          <input
            className="border pl-2 py-1 rounded-md w-full h-8 text-xs md:text-base text-[#383529] border-primary"
            placeholder={form.placeHolder.company}
            min={2}
            type="text"
            name="company"
            id="company"
            autoComplete="off"
          />
        </div>
        <GuestsInput inputList={inputList} setInputList={setInputList} />

        <ButtonConfirm text={form.buttons.confirm} />
        <span className="text-red-600 text-sm text-center">{error}</span>
        {success && (
          <span className="text-green-500 text-sm text-center">
            Successfull <Check stroke="green" />
          </span>
        )}
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
