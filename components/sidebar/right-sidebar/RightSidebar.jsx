"use client"
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { ChevronRight } from "lucide-react";

import TopPodcaster from "./TopPodcaster";
import PodcastCarousel from "./PodcastCarousel";
import useAuthStore from "@/stores/authStore";


const RightSidebar = ( ) => {
  const [mounted, setMounted] = useState(false);
  const {user} = useAuthStore()

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !user) return null;

  return (
    <section className="right_sidebar text-white-1">
      <Link
        href={`/profile/${user?.username}`}
        className="flex items-center justify-between gap-2 mb-14"
      >
        <div className="flex items-center w-[85%] gap-2">
          <Avatar className="bg-orange-1">
            <AvatarImage src="/images/player1.png" />
          </Avatar>
          <h1 className="text-white-1 flex-1 truncate overflow-hidden whitespace-nowrap">
            {user?.username}
          </h1>
        </div>
        <ChevronRight className="text-orange-1 flex-end flex justify-end items-center" />
      </Link>

      <div className=" flex justify-between">
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
