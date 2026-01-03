import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import RegisterForm from "@/components/auth/RegisterForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const RegisterPage = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col items-center gap-5 justify-center p-5">
      <Image src={Logo} alt="Gather" width={200} height={200} />
      <RegisterForm />
      <LanguageSwitcher />
    </div>
  );
};

export default RegisterPage;
