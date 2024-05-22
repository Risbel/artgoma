import { cn } from "@/lib/utils";
import { IVisits } from "@/queries/getVisits";
import { Calendar, Clock, MailIcon, Phone, User2, X } from "lucide-react";

const Visit = ({ visit }: { visit: IVisits }) => {
  const visitDate = new Date(visit.date);
  const currentDate = new Date();

  const visitDateString = visitDate.toISOString().split("T")[0];
  const currentDateString = new Date(currentDate.toISOString().split("T")[0]).toISOString().split("T")[0];

  return (
    <div
      className={cn(
        "flex flex-col justify-center border border-black p-2 rounded-md",
        visitDateString < currentDateString && "bg-black/10"
      )}
    >
      {visitDateString > currentDateString && <p className="text-center text-blue-500 font-semibold">Pending</p>}
      {visitDateString < currentDateString && <p className="text-center text-red-500">Expired</p>}
      {visitDateString === currentDateString && (
        <p className="text-center text-green-500 font-semibold">To use today</p>
      )}
      <div className="flex gap-2">
        <User2 />
        {visit.first_name} {visit.last_name}
      </div>
      <div className="flex gap-2">
        <MailIcon /> {visit.email}
      </div>
      <div className="flex gap-2">
        <Phone /> {visit.phone}
      </div>
      <div className="flex gap-2">
        <Calendar /> {visit.date}
      </div>
      <div className="flex gap-2">
        <Clock /> {visit.time}
      </div>
      <div className="flex gap-2">
        {visit.collaborator?.name && (
          <p>
            <span className="font-semibold"> Collaborator: </span>
            {visit.collaborator.name}
          </p>
        )}
      </div>
      <div className="flex gap-2 flex-wrap">
        {visit.companions.length > 0 && <p className="font-semibold">Companions:</p>}
        <ul className="flex gap-2 flex-wrap">
          {visit.companions.map((companion) => {
            return (
              <li key={companion.id} className="rounded-md border px-2">
                {companion.first_name} {companion.last_name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Visit;
