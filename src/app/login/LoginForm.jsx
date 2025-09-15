"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import GoogleLoginButton from "@/components/ui/SocialLogin";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    const res = await signIn("credentials", {
      redirect: false, // prevents auto-redirect so you can handle errors
      email: data.email,
      password: data.password,
    });

    console.log("SignIn Response:", res);

    if (res?.error) {
      console.error("Login failed:", res.error);
    } else {
      console.log("Login successful!");
      router.push("/");
    }
  };

  return (
    <div className="w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md space-y-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Login
        </h2>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email")} className="mt-1" />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            className="mt-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full mt-4">
          Login
        </Button>
      </form>
      <GoogleLoginButton />
    </div>
  );
}
