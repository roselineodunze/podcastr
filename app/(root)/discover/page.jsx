import React from "react";
import Image from "next/image";
import NoResultsFound from "@/components/discover/NoResultsFound";
import PodcastCard from "@/components/global/PodcastCard";

const Discover = () => {
  return (
    <div className="mt-9 flex justify-center">
      <section className="w-full">
        <div className="w-full bg-black-2 px-2 flex items-center gap-2 h-12 rounded-md">
          <Image
            src="/icons/search.svg"
            alt="app-logo"
            width={21}
            height={21}
          />
          <input
            type="text"
            placeholder="Type here to search"
            className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 text-white-1 placeholder-white-3"
          />
        </div>
        <div className="mt-9">
          <div className="flex items-center justify-between mb-1">
            {" "}
            <h1 className="text-white-1 text-18">
              Discover Community Podcasts
            </h1>
            <div className="flex items-center bg-black-1 h-9 px-2 gap-1 rounded-sm text-white-3">
              <Image
                src="/icons/filter.svg"
                alt="app-logo"
                width={16}
                height={16}
              />
              <p className="text-12 text-white-1">Apply Filter</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (_, i) => (
                <PodcastCard key={i} />
              )
            )}
          </div>
          {/* <NoResultsFound /> */}
        </div>
      </section>
    </div>
  );
};

export default Discover;
