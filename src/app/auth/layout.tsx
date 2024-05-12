import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="w-full h-screen bg-[#171717] flex justify-center items-center">
      {children}
    </main>
  );
};

export default AuthLayout;
