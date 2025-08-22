import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const MusicPlayer = () => {
  return (
    <div className="h-20 fixed bottom-0 w-full z-99">
      <div className="relative h-1 bg-black-2">
        <div className="h-full w-[35%] bg-white-2"></div>
      </div>
      <div className="glass-effect h-full flex items-center justify-center">
        <div className="flex justify-between w-[90%]">
          <div className="flex items-center gap-2 h-10 w-[25%]">
            <div className="w-10 rounded-sm h-full">
              <AspectRatio ratio={1} className="bg-muted ">
                <Image
                  src="/images/bg-img.png"
                  alt="Photo by Drew Beamer"
                  fill
                  className="h-full w-full rounded-sm object-cover"
                />
              </AspectRatio>
            </div>
            <div>
              <h1 className="text-white-1 text-[13px]">Roseline Odunze</h1>
              <p className="text-[12px] text-white-3">roseline</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 flex-1">
            <Image
              src="/icons/randomPlay.svg"
              alt="app-logo"
              width={18}
              height={18}
            />
            <Image
              src="/icons/reverse.svg"
              alt="app-logo"
              width={18}
              height={18}
            />
            <Image
              src="/icons/Pause.svg"
              alt="app-logo"
              width={33}
              height={33}
            />
            <Image
              src="/icons/forward.svg"
              alt="app-logo"
              width={18}
              height={18}
            />
            <Image
              src="/icons/dontShuffle.svg"
              alt="app-logo"
              width={18}
              height={18}
            />
          </div>
          <div className="flex items-center gap-3 w-[25%] flex-end">
            <p className="text-[13px] text-white-3">1:45/ 4:47</p>
            <Image
              src="/icons/volume-down.svg"
              alt="app-logo"
              width={18}
              height={18}
            />
            <div className="relative h-1 w-40 bg-black-2">
              <div className="h-full w-[40%] bg-white-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
