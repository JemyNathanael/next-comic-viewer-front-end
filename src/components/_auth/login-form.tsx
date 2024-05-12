"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { Space_Grotesk } from "next/font/google";
import { registerSchema } from "@/schemas/registerSchema";
import AuthButtonProvider from "./auth-button";
import { register } from "@/actions/register";
import Link from "next/link";
import { login } from "@/actions/login";
import FormError from "../_form/form-error";

interface LoginFormType {}

const spaceGrotext = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "400", "500", "700"],
});

const LoginForm = (props: LoginFormType) => {
  const [error, setError] = useState<string | undefined>();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    login(values).then((data) => {
      setError(data?.error);
    });
  };

  return (
    <Card className="flex gap-20 p-10 rounded-3xl justify-between items-center">
      <CardHeader>
        <h1
          className={cn(
            "text-4xl font-bold text-purple-400 prevent-select",
            spaceGrotext.className
          )}
        >
          NextDoujin
        </h1>
        <h1 className="text-2xl font-bold">Login</h1>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-4 w-96"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="enter email..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="enter password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
            </div>
            <div>
              <Button className="w-full" type="submit">
                Sign In
              </Button>
              <div className="flex gap-1">
                <p>Don't have an account?</p>
                <Link
                  href="/api/auth/register"
                  className="mx-1 text-purple-400"
                >
                  register
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-center prevent-select">
              Or you can
            </p>
            <div className="flex gap-4 w-full">
              <AuthButtonProvider className="grow" signInMethod="google" />
              <AuthButtonProvider className="grow" signInMethod="github" />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
