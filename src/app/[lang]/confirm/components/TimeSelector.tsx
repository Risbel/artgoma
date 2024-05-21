import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TimeSelector = ({ selectedDate }: { selectedDate: Date }) => {
  const isSaturday = selectedDate ? new Date(selectedDate).getDay() === 5 : false;

  return (
    <Select name="time" required>
      <SelectTrigger id="time" className="border-black h-8">
        <SelectValue placeholder="Time" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          className="hover:cursor-pointer hover:font-semibold"
          value={new Date(new Date().setHours(9, 0, 0, 0)).toISOString().substr(11, 8)}
        >
          9:00 am - 12:00 pm
        </SelectItem>
        <SelectItem
          className="hover:cursor-pointer hover:font-semibold"
          value={new Date(new Date().setHours(12, 0, 0, 0)).toISOString().substr(11, 8)}
        >
          12:00 pm - 3:00 pm
        </SelectItem>
        {!isSaturday && (
          <SelectItem
            className="hover:cursor-pointer hover:font-semibold"
            value={new Date(new Date().setHours(15, 0, 0, 0)).toISOString().substr(11, 8)}
          >
            3:00 pm - 6:00 pm
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
};

export default TimeSelector;
