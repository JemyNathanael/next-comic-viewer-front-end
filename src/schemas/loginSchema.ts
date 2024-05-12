import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1)
    .email({ message: "Are you sure entering a correct email?" }),
  password: z.string().min(1),
});
