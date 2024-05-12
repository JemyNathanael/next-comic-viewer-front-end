"use client";

import React from "react";
import { Button } from "../ui/button";

type SignedOutButtonProps = {
  children: React.ReactNode;
};

const SignOutButton = ({ children }: SignedOutButtonProps) => {
  return <Button>{children}</Button>;
};

export default SignOutButton;
