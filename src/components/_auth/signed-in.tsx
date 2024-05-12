import { auth } from "@/lib/auth";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

interface SignedInProps {
  children: React.ReactNode;
}

const SignedIn = ({ children }: SignedInProps) => {
  const { data: session } = useSession();

  return <>{session?.user && children}</>;
};

export default SignedIn;
