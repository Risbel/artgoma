"use server";
import { Person } from "@/app/confirm/components/GuestsInput";

export const addConfirmations = async (e: FormData, inputList: Person[]) => {
  const collaborator = e.get("collaborator")?.toString();
  const first_name = e.get("first_name")?.toString();
  const last_name = e.get("last_name")?.toString();
  const phone = e.get("phone")?.toString();
  const email = e.get("email")?.toString();
  const company = e.get("company")?.toString();
  const time = e.get("time")?.toString();
  const date: any = e.get("date")?.toString();
  const companions: Person[] = inputList;

  const dayWeek = new Date(date).getDay();
  if (dayWeek == 6) {
    return { error: "date" };
  }

  const newVisit = {
    collaborator,
    first_name,
    last_name,
    phone,
    email,
    time,
    date,
    company,
    companions,
  };

  try {
    const res = await fetch(`https://artworld-api.myaipeople.com/api/visits/`, {
      method: "POST",
      body: JSON.stringify(newVisit),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return { error: `There was an error: ${error}` };
  }
};
