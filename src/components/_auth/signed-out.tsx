import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";

interface SignedOut {
  children: React.ReactNode;
}

const SignedIn = ({ children }: SignedOut) => {
  const { data: session } = useSession();

  return <>{!session?.user && children}</>;
};

export default SignedIn;
