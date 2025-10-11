"use client";
import React, { useState, useEffect } from "react";
import { sidebarLinks } from "@/constants";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Spinner2 } from "../ui/spinner2";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";

const LeftSidebar = () => {
  const pathname = usePathname();
  const { user } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted || !user) {
    return (
      <section className="left_sidebar">
        <div className="w-full flex items-center">
          <Spinner2 />
        </div>
      </section>
    );
  }

  const getLink = (link) => {
    if (link.link === "DYNAMIC_PROFILE") {
      return `/profile/${user?.username}`;
    }
    return link.link;
  };

  return (
    <section
      className={`left_sidebar ${showSidebar ? "flex w-full max-w-[270px] fixed left-0 top-0 h-full z-50" : "hidden"}`}
    >
        <nav className="w-full h-full lg:pl-8 pt-8">
          <Link
            href="/"
            className="flex items-center gap-1 max-lg:justify-center mb-14"
          >
            <Image
              src="/icons/logo.svg"
              alt="app-logo"
              width={23}
              height={23}
            />
            <h1 className="text-20 font-semibold">Podcastr</h1>
          </Link>

          {sidebarLinks.map((item, i) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={i}
                href={getLink(item)}
                className={`flex items-center gap-3 py-4 ${
                  isActive ? "bg-nav-focus border-r-4 border-orange-1" : ""
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
                <p className="block md:hidden text-[16px] text-white-5 hover:text-white-1 lg:block">
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
