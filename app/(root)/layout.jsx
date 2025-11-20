"use client";
import MusicPlayer from "@/components/global/MusicPlayer";
import NavBar from "@/components/global/NavBar";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className=" w-screen h-screen">
      <main className="h-full flex justify-between ">
        <LeftSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <section className="flex-1 flex flex-col min-w-0">
          <div className="w-full px-[2.5%]">
            <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          </div>

          <div className="overflow-y-scroll w-full px-[4%] sm:px-[2.5%] pt-7">
            {children}
          </div>
        </section>
        <RightSidebar />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}
