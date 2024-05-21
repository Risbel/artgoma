import { IVisits } from "@/queries/getVisits";
import { ArrowDown10, ArrowUp01 } from "lucide-react";
import { useEffect, useState } from "react";

const SortByDate = ({
  setFilteredData,
  filteredData,
  results,
}: {
  setFilteredData: React.Dispatch<IVisits[]>;
  filteredData: IVisits[];
  results: IVisits[];
}) => {
  const [sortOrder, setSortOrder] = useState("desc");

  const sortDataByDate = (data: IVisits[], order: string) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === "asc" ? Number(dateA) - Number(dateB) : Number(dateB) - Number(dateA);
    });
  };

  useEffect(() => {
    const sortedData = sortDataByDate([...filteredData], sortOrder);
    setFilteredData(sortedData);
  }, [sortOrder, results]);

  return (
    <button
      className="flex gap-2 border rounded-md px-1 border-black"
      onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
    >
      <p>Sort by date</p> {sortOrder === "asc" ? <ArrowUp01 /> : <ArrowDown10 />}
    </button>
  );
};

export default SortByDate;
