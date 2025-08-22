import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PodcastCarousel = () => {
  return (
    <>
      <Carousel className="w-full max-w-xs mb-10 mt-3 ">
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <AspectRatio ratio={1} className="bg-muted ">
                <Image
                  src="/images/bg-img.png"
                  alt="Photo by Drew Beamer"
                  fill={true}
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious/>
        <CarouselNext/> */}
      </Carousel>
    </>
  );
};

export default PodcastCarousel;
