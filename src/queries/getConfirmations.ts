export const getConfirmations = async () => {
  const res = await fetch(`https://artgoma-api.myaipeople.com/api/visits/`, {
    next: {
      tags: ["subscriptions"],
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const subscriptions: IConfirmations = await res.json();

  return subscriptions;
};

export interface IConfirmations {
  count: number;
  next: string;
  previous: string;
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
      image_heigth: number;
      logo_heigth: number;
      image_width: number;
      logo_width: number;
    }
  ];
}
