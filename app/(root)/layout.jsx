"use client";
import MusicPlayer from "@/components/global/MusicPlayer";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import { auth } from "@/firebase/firebase";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function RootLayout({ children }) {
  const { user } = useAuthStore();
  // const [authUser] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <div className="relative w-screen h-screen">
      <main className="relative h-full  flex justify-between">
        <LeftSidebar />
        <section className="flex-1 flex justify-center">
          <div className="overflow-y-scroll w-[98%]">
            {/* <div className="relative">
        <button
          className="md:disabled fixed top-1 left-6"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {showSidebar ? <PanelLeftClose /> : <PanelLeftOpen />}
        </button>
      </div> */}
            {children}
          </div>
        </section>
        <RightSidebar />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}
