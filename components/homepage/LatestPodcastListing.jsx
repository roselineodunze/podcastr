import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Tooltip } from "../ui/tooltip";

const LatestPodcastListing = ({ index }) => {
  return (
    <div
      className={`flex items-center gap-5 sm:gap-0 ${
        index !== 4 ? "border-b-2 border-gray-800" : ""
      }`}
    >
      <div className="flex items-center gap-5 w-[70%] sm:w-1/2 my-2">
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
          <Tooltip
            content="143,809"
            positioning={{
              placement: "top",
              offset: { mainAxis: 4, crossAxis: 4 },
            }}
            openDelay={400}
            closeDelay={100}
            contentProps={{
              className:
                "bg-black-2 text-sm px-2 py-1 rounded-md block sm:hidden",
            }}
            unstyled
          >
            <Image
              src="/icons/headphone.svg"
              alt="app-logo"
              width={23}
              height={23}
            />
          </Tooltip>
          <h1 className="text-white-1 text-[14px] hidden sm:block">143,809</h1>
        </div>
        <div className="flex items-center gap-2">
          <Tooltip
            content="1:04:23"
            positioning={{
              placement: "top",
              offset: { mainAxis: 4, crossAxis: 4 },
            }}
            openDelay={400}
            closeDelay={100}
            contentProps={{
              className:
                "bg-black-2 text-sm px-2 py-1 rounded-md block sm:hidden",
            }}
            unstyled
          >
            <Image
              src="/icons/watch.svg"
              alt="app-logo"
              width={23}
              height={23}
            />
          </Tooltip>
          <h1 className="text-white-1 text-[14px] hidden sm:block">1:04:23</h1>
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
