"use client"
import React from "react";
import Image from "next/image";
import useGoogleAuth from "@/hooks/useGoogleAuth";

const GoogleAuth = () => {
  const { loginGoogle, loading } = useGoogleAuth();

  return (
    <div
      className="h-12 w-12 border-[3px] border-black-2 rounded-md flex justify-center items-center cursor-pointer"
      onClick={loginGoogle}
    >
      <Image src="/icons/google.svg" alt="app-logo" width={23} height={23} />
    </div>
  );
};

export default GoogleAuth;
