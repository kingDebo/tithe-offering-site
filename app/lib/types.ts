import { formSchema } from "./definitions";

export type FormSchema = keyof typeof formSchema.shape;

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
