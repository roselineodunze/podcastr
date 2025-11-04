"use client";
import ProfilePodcasts from "@/components/profile/ProfilePodcasts";
import useGetUserByUsername from "@/hooks/useGetUserByUsername";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import { use } from "react";

const ProfilePage = ({ params }) => {
  const { username } = use(params);
  console.log(username);
  const { userProfile } = useGetUserByUsername(username);
  const {user} = useAuthStore()
  const showCreatePodcastBtn = userProfile?.uid === user?.uid;

  return (
    <div className="">
        <h1 className="text-white-1 font-normal text-xl">Podcaster Profile</h1>
        <div className="mt-14 flex gap-5 mb-8 flex-col md:flex-row">
          <div className="w-full md:w-[270px] h-[230px] max-w-full flex-shrink-0 ">
            <Image
              src="/images/bg-img.png"
              alt="Photo by Drew Beamer"
              width={270}
              height={230}
              className="rounded-sm object-cover w-full h-full"
            />
          </div>
          <div className="overflow-x-hidden flex flex-col items-center md:items-start">
            <div className="flex items-center gap-1 mb-3">
              <Image
                src="/icons/blue.svg"
                alt="app-logo"
                width={16}
                height={16}
              />
              <p className="text-[12px] text-white-3">UsePost Creator</p>
            </div>
            <h1 className="text-white-1 font-semibold text-2xl md:text-3xl mb-6">
              {userProfile?.username}
            </h1>
            <div className="flex items-center gap-2 mb-7">
              <Image
                src="/icons/headphone.svg"
                alt="app-logo"
                width={23}
                height={23}
              />
              <h1 className="text-white-1 text-[14px]">
                143,809 <span className="text-white-3">monthly listeners</span>
              </h1>
            </div>
            <button
              className="text-white-1 flex items-center gap-2 justify-center bg-orange-1 h-10 w-60 rounded-md px-3 font-medium"
            >
              <Image
                src="/icons/play2.svg"
                alt="app-logo"
                width={12}
                height={12}
              />
              <h1 className="text-[15px]">Play a random podcast</h1>
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-5">
            {" "}
            <h1 className="text-white-1 text-18">All Podcasts</h1>
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
          <ProfilePodcasts/>
        </div>
    </div>
  );
};

export default ProfilePage;
