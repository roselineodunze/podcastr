"use client";
import MusicPlayer from "@/components/global/MusicPlayer";
import NavBar from "@/components/global/NavBar";
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
  const [showSidebar, setShowSidebar] = useState(false);

  if (!user) {
    router.push("/sign-in");
  }

  return (
    <div className=" w-screen h-screen">
      <main className=" h-full flex justify-between">
        <LeftSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <section className="flex-1 flex flex-col justify-center">
          <div className="w-full max-w-[96%] mx-auto z-10 md:hidden">
            <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </div>

          <div className="overflow-y-scroll w-full max-w-[98%] ">
            {children}
          </div>
        </section>
        <RightSidebar />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}
