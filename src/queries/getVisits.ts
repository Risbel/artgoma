import { revalidateTag } from "next/cache";

export const getVisits = async (param?: string) => {
  const res = await fetch(`https://artgoma-api.myaipeople.com/api/visits/?query=${param ?? ""}`, {
    next: {
      tags: ["visits"],
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidateTag("visits");

  const visits: ResultVisits = await res.json();

  return visits;
};

export interface ResultVisits {
  count: number;
  next: string | null;
  previous: string | null;
  results: IVisits[];
}

export interface IVisits {
  id: string;
  collaborator: Collaborator | null;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  companions: Companions[];
}

interface Collaborator {
  name: string;
  slogan: string;
  image: string;
  logo: string;
  email: string;
  phone: string;
  address: string;
  is_active: boolean;
}

interface Companions {
  id: string;
  first_name: string;
  last_name: string;
  visit: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
[];
