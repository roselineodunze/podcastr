import Image from "next/image";

const CreatePodcastForm = () => {
  return (
    <div className="mt-12 text-white-1">
      <label className="text-16 pl-1">Podcast Title</label>
      <div className="w-full mt-2 mb-6 bg-black-1 px-3 flex items-center gap-2 h-12 rounded-md">
        <input
          type="text"
          placeholder="Enter a title"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3"
        />
      </div>

      <label className="text-16 pl-1">Category</label>
      <div className="w-full mt-2 mb-6 bg-black-1 px-3 flex items-center gap-2 h-12 rounded-md">
        <input
          type="text"
          placeholder="Select Category"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3"
        />
        <Image
          src="/icons/arrow-down.svg"
          alt="app-logo"
          width={23}
          height={23}
        />
      </div>

      <label className="text-16 pl-1">Description</label>
      <div className="w-full mt-2 mb-6 bg-black-1 px-3 rounded-md pt-3">
        <textarea
          placeholder="Write a short description about the podcast"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3 h-24 resize-none"
        />
      </div>

      <div className="h-2 bg-black-1 my-8"></div>

      <label className="text-16 pl-1">AI prompt to generate podcast</label>
      <div className="w-full mt-2 mb-5 bg-black-1 px-3 rounded-md pt-3">
        <textarea
          placeholder="Provide text to genrate podcast"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3 h-32 resize-none"
        />
      </div>

      <div className="w-fit mt-2 mb-3 bg-black-1 px-3 flex items-center gap-3 h-12 rounded-md">
        <p className="text-16">AI prompt to generate thumbnail</p>
        <button className="bg-black-2 px-2 h-8 rounded-md">
          Upload custom image
        </button>
      </div>

      <div className="w-full mb-6 px-3 bg-black-1 rounded-md pt-3 h-40 flex justify-center items-center">
        <div className="w-[35%] text-center flex flex-col items-center gap-2">
          <div className="h-10 w-10 border-4 border-black-2 rounded-full flex items-center justify-center">
            <Image
              src="/icons/cloud.svg"
              alt="app-logo"
              width={25}
              height={25}
            />
          </div>
          <p className="text-14">
            <span className=" text-orange-1">Click to signal</span> lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <button className="bg-orange-1 w-full px-2 h-10 rounded-sm mb-10 text-16">
        Submit & publish podcast
      </button>
    </div>
  );
};

export default CreatePodcastForm;
