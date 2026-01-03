import LandingNavbar from "@/components/landing/LandingNavbar";
import { Metadata } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";
import Puzzle from "@/public/login.jpg";
import Transition from "@/components/auth/Transition";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Login to your account",
  description: "Definitly a better way to communicate",
};

const LandingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex  w-full ">
      <div className="w-full lg:w-1/2 flex flex-col  items-center justify-center">
        <Transition>{children}</Transition>
      </div>
      <div className="w-1/2 hidden lg:flex flex-col  items-center justify-center">
        <Image className="w-full h-[calc(100vh)] object-cover" width={700} height={500} src={Puzzle} alt="image" />
      </div>
    </div>
  );
};

export default LandingLayout;
