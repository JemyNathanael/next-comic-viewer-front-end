import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(4).max(34),
  email: z
    .string()
    .min(1)
    .email({ message: "Are you sure entering a correct email?" }),
  password: z.string().min(1).max(34),
});
