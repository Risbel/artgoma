export const getConfirmations = async () => {
  const res = await fetch(
    `https://artworld-api.myaipeople.com/api/subscriptions_by_event/ba688a61-71bb-4677-b180-8d40f3c82796/`,
    {
      next: {
        tags: ["subscriptions"],
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const subscriptions: IConfirmations = await res.json();

  return subscriptions;
};

export interface IConfirmations {
  count: 1;
  next: null;
  previous: null;
  results: [
    {
      id: string;
      first_name: string;
      last_name: string;
      phone: string;
      email: string;
      address: string;
      company: string;
      is_active: boolean;
      created_at: string;
      updated_at: string;
      companions: [
        {
          id: string;
          first_name: string;
          last_name: string;
          subscription: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        }
      ];
    }
  ];
}
