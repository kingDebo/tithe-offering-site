import {
  FieldValues,
  UseFormRegister,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";
import { formSchema } from "../lib/definitions";
import { FormSchema } from "../lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function NumberFieldComponent({
  name,
  label,
  onChange,
}: {
  name: FormSchema;
  label?: string | undefined;
  onChange?: (value: number) => void;
}): React.ReactElement {
  const { register, control } = useFormContext();

  return (
    <FormField
      control={control}
      name={
        name === "tithe" || name === "combinedBudget" ? name : `${name}.value`
      }
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type="number"
              {...register(
                field.name === "tithe" || field.name === "combinedBudget"
                  ? name
                  : `${name}.value`,
                {
                  valueAsNumber: true,
                  min: 0,
                },
              )}
              placeholder="10.00"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
}
