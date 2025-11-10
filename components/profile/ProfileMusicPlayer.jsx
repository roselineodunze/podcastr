import { formatTime } from "@/utils/utils";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const ProfileMusicPlayer = ({ audioUrl, podcastDetails }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let lastSecond = -1;

    const onEnd = () => {
      setIsPlaying(false);
      setCurrentTime(duration);
      
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);

      const currentSec = Math.floor(audio.currentTime);
      if (currentSec !== lastSecond) {
        console.log("Current time:", audio.currentTime);
        lastSecond = currentSec;
      }
    };
    const onLoadedMetadata = () => {
      console.log("Audio duration loaded:", audio.duration);
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      if (audio) audio.removeEventListener("ended", onEnd);
    };
  }, [audioUrl]);

  if (!audioUrl) return;

  const progressPercent = duration
    ? Math.min((currentTime / duration) * 100, 100)
    : 0;

  return (
    <div className="flex flex-col justify-between h-[40%]">
      <div className="flex items-center gap-4">
        <Image src="/icons/reverse.svg" alt="app-logo" width={18} height={18} />
        <button
          onClick={togglePlay}
          className="h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center"
        >
          {isPlaying ? (
            <Pause size={16} className="text-black-1" />
          ) : (
            <Play size={16} className="text-black-1" />
          )}
        </button>
        <Image src="/icons/forward.svg" alt="app-logo" width={18} height={18} />
      </div>
      {audioUrl ? (
        <audio ref={audioRef} src={audioUrl} preload="auto" />
      ) : (
        <p className="text-white">Loading audio...</p>
      )}

      <div className="">
        <p className="text-[13px] text-white-3 mb-1">
          {formatTime(currentTime)}/
          {formatTime(duration || podcastDetails?.audioDuration)}
        </p>
        <div className="relative h-1 w-60 bg-black-2">
          <div
            className="h-full bg-white-2 rounded transition-all duration-200"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMusicPlayer;
