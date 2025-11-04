"use client";
import React, { useState, useEffect } from "react";
import { sidebarLinks } from "@/constants";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Spinner2 } from "../ui/spinner2";
import { X, LogOut } from "lucide-react";
import AppLogo from "../global/AppLogo";

const LeftSidebar = ({ showSidebar, setShowSidebar }) => {
  const pathname = usePathname();
  const { user } = useAuthStore();
  const [mounted, setMounted] = useState(false);

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
      className={`left_sidebar ${showSidebar ? "show" : ""} `}
    >
      <nav className="w-full h-full">
        <div className="pl-8 md:pl-6">
          <div className="mb-14 flex items-center justify-between">
            <AppLogo showSidebar={showSidebar} />
            {showSidebar && (
              <button className="pr-2" onClick={() => setShowSidebar(false)}>
                <X size={26} className="text-gray-300" />
              </button>
            )}
          </div>
          <div>
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
          </div>
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
