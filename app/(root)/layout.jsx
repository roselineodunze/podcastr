"use client"
import MusicPlayer from "@/components/global/MusicPlayer";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";
import useAuthStore from "@/stores/authStore";


export default function RootLayout({children}) {
  const { user } = useAuthStore();
  if(!user) return

  return (
    <div className="relative w-screen h-screen">
      <main className="relative h-full  flex justify-between ">
        <LeftSidebar />
        <section className="flex-1 flex justify-center">
          <div className="overflow-y-scroll w-[98%]">{children}</div>
        </section>
        <RightSidebar username={user.username} />
      </main>
      {/* <MusicPlayer /> */}
    </div>
  );
}
