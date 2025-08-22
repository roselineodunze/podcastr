import MusicPlayer from "@/components/global/MusicPlayer";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/right-sidebar/RightSidebar";

export default function RootLayout({children}) {
  return (
    <div className="relative w-full h-screen">
      <main className="relative h-full  flex justify-between ">
        <LeftSidebar />
        <section className="flex-1 flex justify-center">
          <div className="overflow-y-scroll w-[98%]">{children}</div>
        </section>
        <RightSidebar />
      </main>
      <MusicPlayer />
    </div>
  );
}
