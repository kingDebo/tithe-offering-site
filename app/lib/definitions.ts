import z from "zod";

export const formSchema = z.object({
  church: z.string({required_error: "Please provide your church"}),
  name: z.string({ required_error: "Please provide your full name" }),
  address: z.string(),
  telephone: z.string(),
  email: z
    .string()
    .email({ message: "Please provide a valid email" })
    .optional(),
  tithe: z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  combinedBudget: z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  "offering-1": z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  "offering-2": z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  "offering-3": z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  "offering-4": z
    .number()
    .nonnegative({ message: "This number cannot be lower than 0" }),
  total: z
    .number()
    .nonnegative({ message: "Please enter a number greater than 0" }),
});
