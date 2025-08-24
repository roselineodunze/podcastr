import Image from "next/image";

Image;
const NoUserPodcasts = ({ showCreatePodcastBtn }) => {
  return (
    <div className="h-[380px] flex flex-col items-center text-center justify-center">
      <Image
        src="/icons/search2.svg"
        alt="app-logo"
        width={170}
        height={170}
        className="mb-7"
      />
      <h1 className="text-white-1 font-semibold text-2xl mb-3 w-80">
        You have not created any podcasts yet
      </h1>
      {showCreatePodcastBtn && (
        <button className="text-white-1 flex items-center gap-2 justify-center bg-orange-1 h-10 w-60 rounded-md px-3 font-medium">
          <Image
            src="/icons/microphone.svg"
            alt="app-logo"
            width={20}
            height={20}
          />
          <h1 className="text-[15px]">Create a podcast</h1>
        </button>
      )}
    </div>
  );
};

export default NoUserPodcasts;
