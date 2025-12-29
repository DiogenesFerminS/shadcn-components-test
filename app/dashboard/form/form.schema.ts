import z from "zod/v4";

const paises = ["mx", "co", "ar"] as const;

export const formSchema = z.object({
  name: z.string().min(3, "the name must have at least 3 characters.").max(20, "the name must have a maximum of 20 characters."),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"),
  password: z.string().min(6, "the password must have at least 6 characters"),
  confirmPassword: z.string().min(1, "confirm password is required"),
  date: z.coerce.date("Invalid date").refine((date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    
    // Ajuste por si aún no ha cumplido años este año
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }, "You must be at least 18 years old"),
  country: z.enum(paises, "Invalid country"),
  city: z.string().max(20).optional(),
  userPhoto: z.string().max(200),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to continue",
  }),

}).refine((data) => data.password === data.confirmPassword, {
    message: "the passwords do not match",
    path: ["confirmPassword"]
})

export type FormType = z.infer<typeof formSchema>