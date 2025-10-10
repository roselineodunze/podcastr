"use client";
import MusicPlayer from "@/components/global/MusicPlayer";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import { auth } from "@/firebase/firebase";
import useAuthStore from "@/stores/authStore";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function RootLayout({ children }) {
  const { user } = useAuthStore();
  // const [authUser] = useAuthState(auth);
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <div className="relative w-screen h-screen">
      <button
        className="md:hidden"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <PanelLeftClose /> : <PanelLeftOpen />}
      </button>
      <main className="relative h-full  flex justify-between">
        <LeftSidebar isOpen={showSidebar} />
        <section className="flex-1 flex justify-center">
          <div className="overflow-y-scroll w-[98%]">{children}</div>
        </section>
        <RightSidebar />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}
