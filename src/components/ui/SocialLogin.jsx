"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export default function GoogleLoginButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl:"/" })}
      variant="outline"
      className="w-full flex items-center justify-center gap-2 py-2"
    >
      <FcGoogle className="text-2xl" />
      <span className="font-medium">Continue with Google</span>
    </Button>
  );
}
