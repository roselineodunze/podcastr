import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const PodcastCard = ({ podcast }) => {
  const imageStorageId = podcast?.imageStorageId;
  const imageUrl = useQuery(api.audio.getAudioUrl, {
    storageId: imageStorageId,
  });
  return (
    <Link href={`/podcast/${podcast?.id}`} className="mb-2">
      <figure>
        <div>
          <Image
            src={imageUrl || "/images/bg-img.png"}
            alt="Photo by Drew Beamer"
            width={190}
            height={190}
            className="rounded-md aspect-square object-cover"
          />
        </div>

        <div className="mt-2">
          <h1 className="text-white-1 text-[14px] mb-1">
            {podcast?.podcastTitle || "Life is a fickle game"}
          </h1>
          <p className="text-white-3 text-[12px]">
            {podcast?.podcastDescription || "Sharing life experiences"}
          </p>
        </div>
      </figure>
    </Link>
  );
};

export default PodcastCard;
