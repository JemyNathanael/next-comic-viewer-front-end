import Navbar from "@/components/_navbar/Navbar";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default HomeLayout;
