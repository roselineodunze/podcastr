import React from "react";
import Image from "next/image";
import Link from "next/link";

const PodcastCard = ({ podcast }) => {
  return (
    <Link href={`/podcast/${podcast?.id}`} className="mb-5">
      <figure>
        <div>
          <Image
            src="/images/bg-img.png"
            alt="Photo by Drew Beamer"
            width={176}
            height={176}
            className="rounded-md aspect-square object-cover"
          />
        </div>

        <div className="mt-2">
          <h1 className="text-white-1 text-[14px] mb-1">The joe rogan</h1>
          <p className="text-white-3 text-[12px]">a long form in</p>
        </div>
      </figure>
    </Link>
  );
};

export default PodcastCard;
