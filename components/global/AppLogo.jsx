import React from "react";
import Image from "next/image";
import Link from "next/link";

const AppLogo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 max-lg:justify-center"
    >
      <Image src="/icons/logo.svg" alt="app-logo" width={23} height={23} />
      <h1 className="text-20 font-semibold">Podcastr</h1>
    </Link>
  );
};

export default AppLogo;
