import { z } from "zod";
import { formSchema } from "./definitions";
import { FieldPath } from "react-hook-form";

export type TFormSchema = z.infer<typeof formSchema>;

export type TFormValueNames = FieldPath<TFormSchema>;

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "date"
  | "time"
  | "checkbox"
  | "radio"
  | "file"
  | "color";
