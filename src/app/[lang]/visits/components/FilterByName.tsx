import { IVisits } from "@/queries/getVisits";
import { Filter, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const FilterByName = ({
  visits,
  setFilteredData,
}: {
  visits: IVisits[];
  setFilteredData: React.Dispatch<IVisits[]>;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (event: any) => {
    const term = event.target.value;

    setSearchTerm(term);
    setLoading(true);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        setLoading(false);
        if (term.trim() === "") {
          setFilteredData(visits);
        } else {
          setFilteredData(visits.filter((item: any) => item.first_name.toLowerCase().includes(term.toLowerCase())));
        }
      }, 1500)
    );
  };

  useEffect(() => {
    // Limpiar el timeout cuando el componente se desmonta
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);
  return (
    <div className="flex gap-2 my-4">
      <input
        className="pl-2 border border-black rounded-md"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? <Loader2 className="animate-spin" /> : <Filter />}
    </div>
  );
};

export default FilterByName;
