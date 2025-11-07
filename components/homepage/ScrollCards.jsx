import React, { useRef } from "react";
import PodcastCard from "../global/PodcastCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";


const ScrollCards = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9; // scroll ~90% of the visible width

    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden no-scrollbar"
      >
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex 
                   items-center justify-center h-10 w-10 bg-black-1 hover:bg-black-2
                   rounded-full p-2 transition"
        >
          <ChevronLeftIcon className="w-5 h-5 text-black" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex 
                   items-center justify-center h-10 w-10 bg-black-1 hover:bg-black-2
                   rounded-full p-2 transition"
        >
          <ChevronRightIcon className="w-5 h-5 text-black" />
        </button>
        <div className="flex space-x-4 px-4 py-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="flex-shrink-0 w-[180px]">
              <PodcastCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
