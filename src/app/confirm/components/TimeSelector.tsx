import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TimeSelector = () => {
  return (
    <Select name="time" required>
      <SelectTrigger id="time" className="border-black h-8">
        <SelectValue placeholder="Time" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="hover:cursor-pointer hover:font-semibold" value="9:00am-12:00pm">
          9:00 am - 12:00 pm
        </SelectItem>
        <SelectItem className="hover:cursor-pointer hover:font-semibold" value="12:00pm-3:00pm">
          12:00 pm - 3:00 pm
        </SelectItem>
        <SelectItem className="hover:cursor-pointer hover:font-semibold" value="3:00pm-6:00pm">
          3:00 pm - 6:00 pm
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TimeSelector;
