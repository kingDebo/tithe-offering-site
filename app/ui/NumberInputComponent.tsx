import {
  FieldValues,
  UseFormRegister,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";
import { formSchema } from "../lib/definitions";
import { TFormValueNames } from "../lib/types";
import { TFormSchema } from "../lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactElement } from "react";

export default function NumberFieldComponent({
  name,
  label,
  onChange,
}: {
  name: TFormValueNames;
  label?: string | undefined;
  onChange?: (value: number) => void;
}): React.ReactElement {
  const { register, control } = useFormContext();

  function blurOnScroll() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              onWheel={blurOnScroll}
              type="number"
              {...register(name, {
                valueAsNumber: true,
                min: 0,
              })}
              placeholder="10.00"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
}
