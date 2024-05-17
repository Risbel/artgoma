"use server";

import { revalidateTag } from "next/cache";

export const addCollaborator = async (e: FormData) => {
  const name = e.get("name")?.toString();
  const slogan = e.get("slogan")?.toString();
  const image = "";
  const logo = "";
  const email = e.get("email")?.toString();
  const phone = e.get("phone")?.toString();
  const address = e.get("address")?.toString();
  const is_active: boolean = true;

  const newCollaborator = {
    name,
    slogan,
    image,
    logo,
    email,
    phone,
    address,
    is_active,
  };

  try {
    const res = await fetch(`https://artgoma-api.myaipeople.com/api/collaborators/`, {
      method: "POST",
      body: JSON.stringify(newCollaborator),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag("collaborators");

    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return { error: `There was an error: ${error}` };
  }
};
