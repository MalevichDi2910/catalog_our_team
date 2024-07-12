import { z } from "zod";

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export const signUpFormSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords don't match",
    path: ["confirmPassword"],
  });
