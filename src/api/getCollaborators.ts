import { revalidateTag } from "next/cache";

export const getCollaborators = async () => {
  const res = await fetch(`https://artworld-api.myaipeople.com/api/collaborators/`, {
    next: {
      tags: ["colaborators"],
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  revalidateTag("colaborators");

  const collaborators: ICollaborator = await res.json();

  return collaborators;
};

export interface ICollaborator {
  count: number;
  next: number;
  previous: number;
  results: [
    {
      id: string;
      name: string;
      slug: string;
      code: string;
      slogan: string;
      image: string;
      logo: string;
      email: string;
      phone: string;
      address: string;
      is_active: boolean;
      created_at: string;
      updated_at: string;
      image_heigth: string;
      logo_heigth: string;
      image_width: string;
      logo_width: string;
    }
  ];
}
