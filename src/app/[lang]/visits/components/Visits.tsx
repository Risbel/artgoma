"use client";

import { IVisits, ResultVisits } from "@/queries/getVisits";
import Visit from "./Visit";
import { useState } from "react";
import FilterByName from "./FilterByName";
import FilterByDate from "./FilterByDate";
import SortByDate from "./SortByDate";
import { useParams } from "next/navigation";
import Link from "next/link";

const Visits = ({ visits }: { visits: ResultVisits }) => {
  const params: { date: string } = useParams();
  const results: IVisits[] = visits.results;
  const [filteredData, setFilteredData] = useState(results);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap items-center gap-4">
        <FilterByName visits={results} setFilteredData={setFilteredData} />
        <FilterByDate />

        {params.date ? (
          <Link className="border  border-black rounded-md px-1" href={"/visits"}>
            show all
          </Link>
        ) : (
          <SortByDate filteredData={filteredData} setFilteredData={setFilteredData} results={results} />
        )}
      </div>

      <div className="flex flex-wrap justify-start md:justify-center items-start gap-2">
        <p className="text-xl">Results: {visits.count}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredData.map((visit) => {
          return <Visit visit={visit} key={visit.id} />;
        })}
      </div>
    </div>
  );
};

export default Visits;
