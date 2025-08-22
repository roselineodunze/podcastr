"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthText = () => {
  const pathname = usePathname();

  const isSignIn =
    pathname === "/sign-in" ? true : pathname === "/sign-up" ? false : null;

  return (
    <p className="text-14 text-white-2">
      {isSignIn ? "No account" : "Have an account"}?
      <Link href={isSignIn ? "/sign-up" : "sign-in"}>
        <span className="text-orange-1">
          
          {isSignIn ? " Sign Up" : " Sign In"}
        </span>
      </Link>
    </p>
  );
};

export default AuthText;
