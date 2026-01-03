"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isBtn?: boolean;
  isSpecial?:boolean;
  className?: string;
  btnVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

const NavLink = ({
  href,
  label,
  isBtn,
  isSpecial,
  btnVariant,
  className,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (isBtn) {
    return (
      <Link href={href} className={className}>
        <Button
          className={`cursor-pointer px-5 w-full md:w-auto ${isSpecial ? "signin-special-btn" : ""}`}
          variant={btnVariant || (isActive ? "default" : "default")}
        >
          {label}
        </Button>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "text-xl font-semibold transition-all border-b-2 border-transparent pb-1 hover:text-primary",
        isActive
          ? "text-primary border-primary"
          : "text-foreground hover:text-primary/70",
        className
      )}
    >
      {label}
    </Link>
  );
};

const LandingNavbar = () => {
  return (
    <nav className="flex justify-between p-5 border-b-1 position-sticky top-0 bg-background/80 backdrop-blur-md z-50 gap-2 items-center">
      {/* logo */}
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image src={Logo} alt="Gather" width={150} height={100} />
      </Link>
      {/* links */}
      <div className="flex gap-8 items-center hidden lg:flex ">
        <NavLink href="/" label="Home" />
        <NavLink href="/explore-communities" label="Communities" />
        <NavLink href="/about" label="About" />
      </div>
      <div className="flex gap-4 items-center ">
        <NavLink
          isBtn
          href="/login"
          label="Login"
          isSpecial
        />
        <NavLink
          isBtn
          href="/register"
          label="Create Account"
          btnVariant="link"
          className="hidden md:block"
        />
      </div>
    </nav>
  );
};

export default LandingNavbar;
