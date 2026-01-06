import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const LoginPage = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col items-center gap-5 justify-center p-5">
      <Image src={Logo} alt="Gather" width={200} height={200} />
      <LoginForm />
      <LanguageSwitcher />
    </div>
  );
};

export default LoginPage;
