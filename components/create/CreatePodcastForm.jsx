"use client";
import useCreatePodcast from "@/hooks/useCreatePodcast";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { voiceType } from "@/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery, useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { base64ToBlob, getAudioDuration } from "@/utils/utils";
import useUserProfileStore from "@/stores/userProfileStore";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

const CreatePodcastForm = () => {
  const [podcastData, setPodcastData] = useState({
    podcastTitle: "",
    podcastDescription: "",
    voicePrompt: "",
    selectedVoice: "",
    audioStorageId: "",
    audioDuration: 0,
  });
  const [generatedAudio, setGeneratedAudio] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const { handlePodcastCreation, podcastId, loading } = useCreatePodcast();
  const { user } = useAuthStore();
  const { setUserprofile } = useUserProfileStore();
  // const generatePodcastAudio = useAction(api.openai.generatePodcastAudio);
  // const generateUploadUrl = useMutation(api.audio.generateUploadUrl);
  const router = useRouter();

  useEffect(() => {
    setUserprofile(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPodcastData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePodcastAudioGeneration = async () => {
    const { voicePrompt, selectedVoice } = podcastData;
    const audioBase64 = await generatePodcastAudio({
      voicePrompt,
      selectedVoice,
    });
    console.log("Received audio:", audioBase64);

    const audioBlob = base64ToBlob(audioBase64);
    const audioDuration = await getAudioDuration(audioBlob);
    setPodcastData((prev) => ({
      ...prev,
      audioDuration: Number(audioDuration.toFixed(2)),
    }));

    const fileName = `podcast-${Date.now()}.mp3`;
    const newAudioFile = new File([audioBlob], fileName, {
      type: "audio/mp3",
    });

    setAudioFile(newAudioFile);

    const audio = `data:audio/mp3;base64,${audioBase64}`;
    setGeneratedAudio(audio);
  };

  const handleAudioUpload = async () => {
    try {
      // if (!audioFile) throw new Error("No audio file selected.");

      // const uploadUrl = await generateUploadUrl();
      // if (!uploadUrl) throw new Error("Failed to get upload URL.");

      // const res = await fetch(uploadUrl, {
      //   method: "POST",
      //   headers: { "Content-Type": audioFile.type },
      //   body: audioFile,
      // });

      // if (!res.ok) throw new Error("Audio upload failed.");

      // const { storageId } = await res.json();
      // if (!storageId) throw new Error("No storage ID returned from upload.");
      // console.log("✅ Uploaded! Storage ID:", storageId);

      const finalPodcastData = {
        ...podcastData,
        // audioStorageId: storageId,
      };

      setPodcastData(finalPodcastData);
      console.log(finalPodcastData);

      await handlePodcastCreation(finalPodcastData);
      router.push(`/podcast/${podcastId}`);
    } catch (err) {
      console.error("❌ Failed to upload and create podcast:", err?.message);
      showToast.error("Failed to create podcast", err?.message);
    }
  };

  return (
    <div className="mt-12 text-white-1">
      <label className="text-16 pl-1">Podcast Title</label>
      <Input
        onChange={handleChange}
        value={podcastData.podcastTitle}
        name="podcastTitle"
        placeholder="Enter a title"
        className="w-full mt-2 mb-6 focus:outline-none focus:ring-0 focus:border-0
border-0 placeholder-white-3 bg-black-1 placeholder:text-[1rem]"
      />

      <label className="text-16 pl-1">Select AI voice</label>
      <Select
        name="selectedVoice"
        value={podcastData.selectedVoice}
        onValueChange={(value) =>
          setPodcastData((prev) => ({
            ...prev,
            selectedVoice: value,
          }))
        }
      >
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
      <Textarea
        name="podcastDescription"
        value={podcastData.podcastDescription}
        placeholder="Write a short description about the podcast"
        className="w-full mt-2 mb-6 bg-black-1 h-24 resize-none focus:outline-none focus:ring-0 focus:border-0 border-0 placeholder:text-[1rem] placeholder-white-3"
        onChange={handleChange}
      />

      <div className="h-2 bg-black-1 my-8"></div>

      <label className="text-16 pl-1">AI prompt to generate podcast</label>
      <Textarea
        name="voicePrompt"
        value={podcastData.voicePrompt}
        placeholder="Provide text to generate audio"
        className="w-full mt-2 mb-6 bg-black-1 h-32 resize-none focus:outline-none focus:ring-0 focus:border-0 border-0 placeholder:text-[1rem] placeholder-white-3"
        onChange={handleChange}
      />

      <Button
        className="bg-orange-1 w-[80] h-10 rounded-md text-16 ml-1"
        onClick={handlePodcastAudioGeneration}
      >
        Generate
      </Button>

      {generatedAudio && (
        <audio controls src={generatedAudio} className="my-4" />
      )}

      <div className="w-fit mb-3 bg-black-1 px-3 flex items-center gap-3 h-12 rounded-md mt-10">
        <p className="text-16">AI prompt to generate image</p>
        <Button
          className="bg-black-2 h-8 text-16"
          onClick={async () => await handlePodcastCreation(podcastData)}
        >
          Upload custom image
        </Button>
      </div>

      <Button
        className="bg-orange-1 w-full h-10 rounded-sm mb-10 text-16"
        onClick={handleAudioUpload}
      >
        {loading ? <Spinner className="size-6" /> : "Submit & publish podcast"}
      </Button>
    </div>
  );
};

export default CreatePodcastForm;
