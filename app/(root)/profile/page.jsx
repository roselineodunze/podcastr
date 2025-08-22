import PodcastCard from "@/components/global/PodcastCard";
import NoUserPodcasts from "@/components/profile/NoUserPodcasts";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="mt-9 flex justify-center">
      <section className="w-[95%] ">
        <h1 className="text-white-1 font-normal text-xl">Podcaster Profile</h1>
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
          <div>
            <div className="flex items-center gap-1 mb-3">
              <Image
                src="/icons/blue.svg"
                alt="app-logo"
                width={16}
                height={16}
              />
              <p className="text-[12px] text-white-3">UsePost Creator</p>
            </div>
            <h1 className="text-white-1 font-semibold text-3xl mb-6">
              Roseline Odunze{" "}
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
            <button className="text-white-1 flex items-center gap-2 justify-center bg-orange-1 h-10 rounded-md px-3 font-medium">
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
          <div className="flex items-center justify-between">
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
          {/* <div className="flex flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(
              (_, i) => (
                <PodcastCard key={i} />
              )
            )}
          </div> */}
          <NoUserPodcasts />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
