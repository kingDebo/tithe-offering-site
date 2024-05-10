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

export default function TextFieldComponent({
  children,
  name,
  label,
  description,
}: {
  children: React.ReactNode;
  name: TFormValueNames;
  label?: string;
  description?: string;
}): React.ReactElement {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{children}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
