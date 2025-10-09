"use client";
import MusicPlayer from "@/components/global/MusicPlayer";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import useAuthStore from "@/stores/authStore";
import { PanelLeftOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import dynamic from 'next/dynamic';

export default function RootLayout({ children }) {
  const { user } = useAuthStore();
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <div className="relative w-screen h-screen">
      <main className="relative h-full  flex justify-between">
        {/* <button>
          <PanelLeftOpen />
        </button> */}
        <LeftSidebar />
        <section className="flex-1 flex justify-center">
          <div className="overflow-y-scroll w-[98%]">{children}</div>
        </section>
        <RightSidebar />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}
