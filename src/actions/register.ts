"use server";

import { loginSchema } from "@/schemas/loginSchema";
import { registerSchema } from "@/schemas/registerSchema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/data/db";

export const register = async (value: z.infer<typeof loginSchema>) => {
  const validatedData = registerSchema.safeParse(value);
  console.log(validatedData.data);
  if (!validatedData.success) {
    return { error: "Error occured" };
  }

  const { email, password, name } = validatedData.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email is already created" };
  }

  await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification token email,

  return { success: "Email sent" };
};
