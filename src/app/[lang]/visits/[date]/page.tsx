import { getVisits } from "@/queries/getVisits";
import Visits from "../components/Visits";
import { Locale } from "@/configs/i18n.config";

const visits = async ({ params: { date } }: { params: { lang: Locale; date: string } }) => {
  const visits = await getVisits(date);

  return (
    <div className="p-6 md:p-8 lg:p-16">
      <h1 className="text-center text-2xl font-semibold">Visits</h1>

      <Visits visits={visits} />
    </div>
  );
};

export default visits;
