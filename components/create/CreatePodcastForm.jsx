"use client";
import useCreatePodcast from "@/hooks/useCreatePodcast";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { voiceType } from "@/constants";

const CreatePodcastForm = () => {
  const [podcastData, setPodcastData] = useState({
    podcastTitle: "",
    podcastDescription: "",
  });
  const { handlePodcastCreation } = useCreatePodcast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPodcastData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mt-12 text-white-1">
      <label className="text-16 pl-1">Podcast Title</label>
      <div className="w-full mt-2 mb-6 bg-black-1 px-3 flex items-center gap-2 h-12 rounded-md">
        <input
          type="text"
          name="podcastTitle"
          placeholder="Enter a title"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3"
          value={podcastData.podcastTitle}
          onChange={handleChange}
        />
      </div>

      <label className="text-16 pl-1">Select AI voice</label>
      <Select>
        <SelectTrigger className="w-full bg-black-1 rounded-md mt-2 mb-6 focus:outline-none focus:ring-0 focus:border-0 border-0 text-white-3 text-[1rem]">
          <SelectValue placeholder="Select AI voice" />
        </SelectTrigger>
        <SelectContent className="bg-black-1 w-[20%]">
          <SelectGroup>
            {voiceType?.map((item, index) => (
              <SelectItem
                key={index}
                value={item}
                className="text-[1rem] z-999 focus:outline-none focus:ring-0 focus:border-0 focus:bg-orange-1 text-white-1 border-0"
              >
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <label className="text-16 pl-1">Description</label>
      <div className="w-full mt-2 mb-6 bg-black-1 px-3 rounded-md pt-3">
        <textarea
          placeholder="Write a short description about the podcast"
          name="podcastDescription"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3 h-24 resize-none"
          value={podcastData.podcastDescription}
          onChange={handleChange}
        />
      </div>

      <div className="h-2 bg-black-1 my-8"></div>

      <label className="text-16 pl-1">AI prompt to generate podcast</label>
      <div className="w-full mt-2 mb-5 bg-black-1 px-3 rounded-md pt-3">
        <textarea
          placeholder="Provide text to genrate audio"
          className="bg-transparent w-full focus:outline-none focus:ring-0 focus:border-0
caret-white-5 placeholder-white-3 h-32 resize-none"
        />
      </div>

      <Button
        className="bg-orange-1 w-[80] h-10 rounded-md text-16"
      >
        Generate
      </Button>

      <div className="w-fit mt-2 mb-3 bg-black-1 px-3 flex items-center gap-3 h-12 rounded-md mt-10">
        <p className="text-16">AI prompt to generate audio</p>
        <button className="bg-black-2 px-2 h-8 rounded-md">
          Upload custom image
        </button>
      </div>

      {/* <div className="w-full mb-6 px-3 bg-black-1 rounded-md pt-3 h-40 flex justify-center items-center">
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
      </div> */}
      <Button
        className="bg-orange-1 w-full h-10 rounded-sm mb-10 text-16"
        onClick={() => handlePodcastCreation(podcastData)}
      >
        {" "}
        Submit & publish podcast
      </Button>
    </div>
  );
};

export default CreatePodcastForm;
