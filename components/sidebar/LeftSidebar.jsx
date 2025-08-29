"use client";

import { sidebarLinks } from "@/constants";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  const {user} = useAuthStore()

  const getLink = (link) => {
    if (link.link === 'DYNAMIC_PROFILE') {
      return `/profile/${user.username}`;
    }
    return link.link;
  };

  return (
    <section className="left_sidebar">
      <nav className="">
        <Link
          href="/"
          className="flex items-center gap-1 max-lg:justify-center mb-14"
        >
          <Image src="/icons/logo.svg" alt="app-logo" width={23} height={23} />
          <h1 className="text-20 font-semibold">Podcastr</h1>
        </Link>

        {sidebarLinks.map((item, i) => {
          const isActive =
            pathname === item.link;
          return (
            <Link
              key={i}
              href={getLink(item)}
              className={`flex items-center gap-3 py-4 ${
                isActive ? "bg-nav-focus border-r-4 border-orange-1" : ""
              }`}
            >
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <p className="text-[16px] text-white-5 hover:text-white-1">
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
