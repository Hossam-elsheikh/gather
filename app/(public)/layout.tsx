import LandingNavbar from "@/components/landing/LandingNavbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Gather",
  description: "Definitly a better way to communicate",
};

const LandingLayout = ({ children }: Props) => {
  return <div className="min-h-screen flex flex-col w-full xl:w-[1400px] mx-auto px-4">
    <LandingNavbar/>
    {children}</div>;
};

export default LandingLayout;
