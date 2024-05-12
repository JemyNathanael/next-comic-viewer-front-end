"use client";

import React from "react";
import { Button } from "../ui/button";

interface SignInProps {
  children: React.ReactNode;
}

const SignInButton = ({ children }: SignInProps) => {
  return <Button>{children}</Button>;
};

export default SignInButton;
