import * as React from "react";

export function DateSelector({ inputRef }: { inputRef: React.RefObject<HTMLInputElement> }) {
  const [selectedDate, setSelectedDate] = React.useState<any>();

  // Función para manejar el cambio de la fecha
  const handleChangeFecha = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fecha = event.target.value;

    setSelectedDate(fecha);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSunday = (fecha: any) => {
    const dayWeek = new Date(fecha).getDay();
    return dayWeek === 6; // 6 is sunday
  };

  return (
    <div className="flex flex-col">
      <input
        ref={inputRef}
        className="border border-black h-8 rounded-md pl-2"
        name="date"
        id="date"
        required
        onChange={handleChangeFecha}
        type="date"
        min={new Date().toISOString().split("T")[0]}
      />
      <span className="text-red-600 text-sm pl-2">{isSunday(selectedDate) && "on Sundays we are closed"}</span>
    </div>
  );
}
