import z from "zod";

export const formSchema = z.object({
  reference: z.string({
    required_error: "The Mobanking reference is required",
  }),
  "transfer-date": z.coerce.date({
    required_error: "The Mobanking transfer date is required",
    message: "This date is invalid. format(dd/mm/yyyy or dd-mm-yyyy)",
  }),
  "transfer-amount": z
    .number({ required_error: "The Mobanking transfer amount is required" })
    .nonnegative({ message: "This number cannot be lower than 0" })
    .optional(),
  church: z.string({ required_error: "Please provide your church" }),
  name: z
    .string({ required_error: "Please provide your full name" })
    .regex(RegExp("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")),
  address: z.string({ required_error: "Please provide your home address" }),
  telephone: z.string().optional(),
  email: z
    .string({ required_error: "Please provide your email" })
    .email({ message: "Improper email format" }),
  tithe: z
    .number({
      required_error: "Please provide a value for your tithe",
      invalid_type_error: "Please provide a value for your tithe",
    })
    .nonnegative({ message: "This number cannot be lower than 0" }),
  combinedBudget: z
    .number({
      invalid_type_error: "If you wish to leave this empty please enter 0",
    })
    .nonnegative({ message: "This number cannot be lower than 0" }),
  "offering-1": z.object({
    department: z.string(),
    value: z
      .number({ message: "Please enter a number equal to or higher than 0" })
      .nonnegative({ message: "This number cannot be lower than 0" }),
  }),
  "offering-2": z.object({
    department: z.string(),
    value: z
      .number({
        invalid_type_error: "If you wish to leave this empty please enter 0",
      })
      .nonnegative({ message: "This number cannot be lower than 0" }),
  }),
  "offering-3": z.object({
    department: z.string(),
    value: z
      .number({
        invalid_type_error: "If you wish to leave this empty please enter 0",
      })
      .nonnegative({ message: "This number cannot be lower than 0" }),
  }),
  "offering-4": z.object({
    department: z.string(),
    value: z
      .number({
        invalid_type_error: "If you wish to leave this empty please enter 0",
      })
      .nonnegative({ message: "This number cannot be lower than 0" }),
  }),
  "offering-5": z
    .object({
      department: z.string({ message: "You must provide a department" }),
      value: z
        .number({
          invalid_type_error: "If you wish to leave this empty please enter 0",
        })
        .nonnegative({ message: "This number cannot be lower than 0" }),
    })
    .optional(),
  total: z.number().nonnegative({}),
});
