import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const FilterByDate = () => {
  const params: { date: string } = useParams();

  const [selectedDate, setSelectedDate] = useState(params?.date ?? "");
  const router = useRouter();

  useEffect(() => {
    if (selectedDate) {
      router.push(`/visits/${selectedDate}`);
    }
  }, [selectedDate]);

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <input
        className="border border-black rounded-md pl-2"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default FilterByDate;
