import React from "react";
import Image from "next/image";

const GithubAuth = () => {
  return (
    <div className="h-12 w-12 border-[3px] border-black-2 rounded-md flex justify-center items-center">
      <Image src="/icons/github.svg" alt="app-logo" width={23} height={23} />
    </div>
  );
};

export default GithubAuth;
