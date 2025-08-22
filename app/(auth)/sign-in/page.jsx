"use client";
import useGoogleAuth from "@/hooks/useGoogleAuth";
import React from "react";

const SignIn = () => {
  const { loginGoogle, loading } = useGoogleAuth();

  return (
    <div onClick={loginGoogle}>
      <label className="text-14 text-white-2">Email address (Sign In)</label>
      <div className="w-full mb-4 mt-1 bg-slate-800 px-3 flex items-center gap-2 h-9 rounded-md">
        <input
          type="text"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0 text-white-2
caret-white-3 text-14"
        />
      </div>
    </div>
  );
};

export default SignIn;
