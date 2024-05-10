import { useFormContext } from "react-hook-form";
import { InputType, TFormValueNames } from "../lib/types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function TextFieldComponent({
  name,
  label,
  placeholder,
  description,
  type,
}: {
  name: TFormValueNames;
  label: string;
  placeholder: string | undefined;
  description?: string;
  type?: InputType;
}): React.ReactElement {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type || ""} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
