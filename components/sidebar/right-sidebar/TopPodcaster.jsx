import React from 'react'
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

const TopPodcaster = () => {
  return (
    <>
        <Link href="/profile" className="flex items-center justify-between mb-1">
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
          <div>
            <h1 className="text-white-1 text-[13px]">Roseline Odunze</h1>
            <p className="text-[12px] text-white-3">roseline</p>
          </div>
        </div>
        <p className="text-[13px] text-white-2"> 34 podcasts</p>
      </Link>
    </>
  )
}

export default TopPodcaster