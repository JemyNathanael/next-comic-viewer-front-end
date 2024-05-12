"use client";

import React, { startTransition, useState } from "react";
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
import { TypeOf, z } from "zod";
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
import FormSuccess from "../_form/form-success";
import FormError from "../_form/form-error";

interface RegisterFormType {}

const spaceGrotext = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "400", "500", "700"],
});

const RegisterForm = (props: RegisterFormType) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    register(values).then((data) => {
      setError(data.error);
      setSuccess(data.success);
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
        <h1 className="text-2xl font-bold">Register</h1>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="text"
                        placeholder="enter name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              <FormSuccess message={success} />
              <FormError message={error} />
            </div>
            <div>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
              <div className="flex gap-1">
                <p>Already have an account?</p>
                <Link href="/api/auth/login" className="text-purple-400">
                  login
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

export default RegisterForm;
