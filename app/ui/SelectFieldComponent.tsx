import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectFieldComponent(): React.ReactElement {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Department" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Sabbath School">Sabbath School</SelectItem>
        <SelectItem value="AY">AY</SelectItem>
        <SelectItem value="Pathfinders">Pathfinder</SelectItem>
        <SelectItem value="Building Fund">Building Fund</SelectItem>
        <SelectItem value="Education">Education</SelectItem>
        <SelectItem value="Medical">Medical</SelectItem>
      </SelectContent>
    </Select>
  );
}
