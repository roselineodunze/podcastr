import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { ChevronRight } from "lucide-react";

import TopPodcaster from "./TopPodcaster";
import PodcastCarousel from "./PodcastCarousel";

const RightSidebar = () => {
  return (
    <section className="right_sidebar text-white-1">
      <Link href="/profile" className="flex items-center justify-between">
        <div className="flex items-center  gap-2">
          <Avatar>
            <AvatarImage src="/images/player1.png" />
          </Avatar>
          <h1 className="text-white-1">Roseline Odunze</h1>
        </div>
        <ChevronRight className="text-orange-1" />
      </Link>

      <div className=" flex justify-between mt-12">
        <h1 className="text-[15px]">Fans Also Like</h1>
        <p className="text-14 text-orange-1">See All</p>
      </div>

      <PodcastCarousel />

      <div className=" flex justify-between mb-3">
        <h1 className="text-[15px]">Top Podcasters</h1>
        <p className="text-14 text-orange-1">See All</p>
      </div>

      <TopPodcaster />
      <TopPodcaster />
      <TopPodcaster />
    </section>
  );
};

export default RightSidebar;
