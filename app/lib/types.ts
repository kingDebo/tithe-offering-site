import { z } from "zod";
import { formSchema } from "./definitions";

export type FormSchema = keyof typeof formSchema.shape;

export type TFormSchema = z.infer<typeof formSchema>;

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
