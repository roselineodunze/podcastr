import { Play, Pause } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const ProfileMusicPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    if (!audioRef.current) return;
    const onEnd = () => setIsPlaying(false);
    audioRef.current.addEventListener("ended", onEnd);
    return () => {
      if (audio) audio.removeEventListener("ended", onEnd);
    };
  }, []);

  if (!audioUrl) return;

  return (
    <div className="flex flex-col justify-between h-[40%]">
      <div className="flex items-center gap-4">
        <Image src="/icons/reverse.svg" alt="app-logo" width={18} height={18} />
        <button onClick={togglePlay} className="h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center">
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
        <p className="text-[13px] text-white-3 mb-1">1:45/4:47</p>
        <div className="relative h-1 w-60 bg-black-2">
          <div className="h-full w-[40%] bg-white-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMusicPlayer;
