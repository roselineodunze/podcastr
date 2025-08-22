import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const LatestPodcastListing = ({ index }) => {
  return (
    <div className={`flex items-center ${
        index !== 4 ? 'border-b-2 border-gray-800' : ''
      }`}>
      <div className="flex items-center gap-5 w-1/2 my-2">
        <h3 className="text-white-1">{index}</h3>
        <div className="flex items-center my-2 gap-2 h-10">
          <div className="w-10 rounded-sm h-full">
            <AspectRatio ratio={1} className="bg-muted ">
              <Image
                src="/images/bg-img.png"
                alt="Photo by Drew Beamer"
                fill
                className="h-full w-full rounded-sm object-cover"
              />
            </AspectRatio>
          </div>
          <h1 className="text-white-1 text-[14px]">Roseline Odunze</h1>
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-between my-2">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/headphone.svg"
            alt="app-logo"
            width={23}
            height={23}
          />
          <h1 className="text-white-1 text-[14px]">143,809</h1>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/watch.svg" alt="app-logo" width={23} height={23} />
          <h1 className="text-white-1 text-[14px]">1:04:23</h1>
        </div>
        <Image
          src="/icons/three-dots.svg"
          alt="app-logo"
          width={23}
          height={23}
          className="rotate-90"
        />
      </div>
    </div>
  );
};

export default LatestPodcastListing;
