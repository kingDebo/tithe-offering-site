import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { FormSchema } from "../lib/types";

export default function SelectFieldComponent({
  name,
}: {
  name: FormSchema;
}): React.ReactElement {
  const { control, register } = useFormContext();

  return (
    <FormField
      control={control}
      name={`${name}.department`}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select onValueChange={field.onChange}>
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
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
}
