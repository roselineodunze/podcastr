"use client";

import PodcastCard from "@/components/global/PodcastCard";
import LatestPodcastListing from "@/components/homepage/LatestPodcastListing";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  return (
    <div className="mt-9 flex justify-center">
      <section className="w-[95%] ">
        <h1 className="text-white-1 text-18">Trending Podcasts</h1>
        <div className="flex items-center justify-between ">
          {[1, 2, 3, 4].map(({ _id, text }) => (
            <PodcastCard key={_id} />
          ))}
        </div>
        <div className="my-6">
          <div className="flex justify-between">
            <h1 className="text-white-1 text-18">Latest Podcasts</h1>
            <p className="text-14 text-orange-1">See All</p>
          </div>
          <div className="pl-2">
            {[1, 2, 3, 4].map((num, i) => (
              <LatestPodcastListing key={i} index={num} />
            ))}
          </div>
        </div>
        <h1 className="text-white-1 text-18">Popular Podcasts</h1>
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((_, i) => (
            <PodcastCard key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
