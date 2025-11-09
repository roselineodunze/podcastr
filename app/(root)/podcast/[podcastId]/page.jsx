"use client";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import PodcastCard from "@/components/global/PodcastCard";
import { use } from "react";
import useGetPodcastById from "@/hooks/useGetPodcastById";
import useGetUserByUsername from "@/hooks/useGetUserByUsername";
import ProfileMusicPlayer from "@/components/profile/ProfileMusicPlayer";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const PodcastDetails = ({ params }) => {
  const { podcastId } = use(params);
  const { podcastDetails } = useGetPodcastById(podcastId);
  const { userProfile: author } = useGetUserByUsername(podcastDetails?.author);
  const audioStorageId = podcastDetails?.audioStorageId
  const audioUrl = useQuery(api.audio.getAudioUrl, { storageId: audioStorageId });
  console.log("Audiourl: " + audioUrl)

  return (
    <div className="flex justify-center">
      <section className="w-[95%]">
        <div className="flex justify-between items-center">
          <h1 className="text-white-1 font-light text-xl">Currently Playing</h1>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/headphone.svg"
              alt="app-logo"
              width={23}
              height={23}
            />
            <h1 className="text-white-2 text-[14px]">143,809</h1>
          </div>
        </div>
        <div className="mt-14 flex gap-5 mb-8">
          <div className="w-[270px] h-[230px]">
            <Image
              src="/images/bg-img.png"
              alt="Photo by Drew Beamer"
              width={270}
              height={230}
              className="rounded-sm object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 pt-3 pb-1 flex flex-col justify-between">
            <div >
              <div className="flex items-center justify-between">
                <h1 className="text-white-1 font-semibold text-3xl ">
                  {podcastDetails?.podcastTitle}
                </h1>
                <div className="relative">
                  <Image
                    src="/icons/three-dots.svg"
                    alt="app-logo"
                    width={23}
                    height={23}
                  />
                  <div className="absolute right-[90%] bg-black-1 w-36 h-20 flex flex-col justify-around px-2 py-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/icons/edit.svg"
                        alt="app-logo"
                        width={20}
                        height={20}
                      />
                      <p className="text-[14px] text-white-3">Edit</p>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <Image
                        src="/icons/delete.svg"
                        alt="app-logo"
                        width={20}
                        height={20}
                      />
                      <p className="text-[14px] text-white-3">Delete</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-3">
                <Avatar>
                  <AvatarImage src="/images/player1.png" />
                </Avatar>
                <p className="text-[13px] text-white-3">{author?.username}</p>
              </div>
            </div>
            <ProfileMusicPlayer audioUrl={audioUrl}/>
          </div>
        </div>
        <div className="mt-9 w-[90%]">
          <p className="mb-6 text-white-2 text-[14px]">
            {podcastDetails?.podcastDescription}
          </p>
          <div>
            <h1 className="text-white-1 font-light text-l">Transcriptions</h1>
            <p className="mb-6 text-white-2">{podcastDetails?.voicePrompt}</p>
          </div>
          <div>
            <h1 className="text-white-1 font-light text-l">Thumbnail Prompt</h1>
            <p className="mb-6 text-white-2 text-[14px]">
              A computer is an electronic device capable of performing
              computations and manipulating data under the control of
              instructions stored in its memory
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-white-1 font-medium text-l">Similar Podcasts</h1>
          <div className="flex flex-wrap justify-between mb-7">
            {[1, 2, 3, 4].map((_, i) => (
              <PodcastCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastDetails;
