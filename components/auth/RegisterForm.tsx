"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const t = useTranslations("Auth.register");
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: any) => api.post("/users", data),
    onSuccess: () => {
      toast.success("Account created successfully!");
      router.push("/login");
    },
    onError: (error: any) => {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (data.password !== data.repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const userInfo = {
      firstName:data.firstName,
      lastName:data.lastName,
      username:data.username,
      email:data.email,
      password:data.password
    }
    mutation.mutate(userInfo);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
          <CardAction>
            <Link href="/login">
              <Button variant="link">{t("loginLink")}</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="firstName">{t("firstName")}</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Hossam"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">{t("lastName")}</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Elsheikh"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">{t("username")}</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="hos122"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("password")}</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeatPassword">{t("repeatPassword")}</Label>
                </div>
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full my-4"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Creating account..." : t("signupButton")}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={mutation.isPending}
            >
              {t("signupWithGoogle")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RegisterForm;
