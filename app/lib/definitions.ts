import z from "zod";

export const formSchema = z.object({
  church: z.string({required_error: "Please provide your church"}),
  name: z.string({ required_error: "Please provide your full name" }),
  address: z.string(),
  telephone: z.string(),
  email: z
    .string()
    .email({ message: "Improper email format" })
    .optional(),
  tithe: z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  combinedBudget: z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  "offering-1": z.object({
    department: z.string(),
    value: z .number()
    .nonnegative({ message: "This number cannot be lower than 0" })
  }),
  "offering-2": z.object({
    department: z.string(),
    value: z .number()
    .nonnegative({ message: "This number cannot be lower than 0" })
  }),
  "offering-3": z.object({
    department: z.string(),
    value: z .number()
    .nonnegative({ message: "This number cannot be lower than 0" })
  }),
  "offering-4": z.object({
    department: z.string(),
    value: z .number()
    .nonnegative({ message: "This number cannot be lower than 0" })
  }),
  "offering-5": z.object({
    department: z.string({ message: "You must provide a department"}),
    value: z .number()
    .nonnegative({ message: "This number cannot be lower than 0" })
  }).optional(),
  total: z
    .number()
    .nonnegative({ message: "Please enter a number greater than 0" }),
});
