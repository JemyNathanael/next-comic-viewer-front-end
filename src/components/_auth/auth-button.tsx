import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { toPascalCase } from "../../lib/pascalCase";
import { cn } from "../../lib/utils";

interface AuthButtonProps {
  signInMethod: "google" | "github";
  className: string;
}

const AuthButtonProvider = ({ signInMethod, className }: AuthButtonProps) => {
  return (
    <Button type="button" className={cn(className, "space-x-2")}>
      {signInMethod == "google" ? <FaGoogle /> : <FaGithub />}{" "}
      <p>Continue with {toPascalCase(signInMethod)}</p>
    </Button>
  );
};

export default AuthButtonProvider;
