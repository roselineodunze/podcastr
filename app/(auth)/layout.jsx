import AuthText from "@/components/auth/AuthText";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({children}) {
  return (
    <div className="auth-page h-screen w-full text-white-1 flex justify-center items-center">
      <div className="relative bg-black-1 w-[400px] h-[440px] p-7 rounded-xl box-shadow">
        <div className="absolute top-8 left-0 transform -translate-x-full w-7 rounded-tl-md rounded-bl-md bg-orange-1 flex items-center justify-center py-3">
          <div className="vertical-bottom-to-top flex items-center gap-1">
            <span className="text-xs text-white font-semibold">
              Secured by{" "}
            </span>
            <Image
              src="/icons/r-letter.svg"
              alt="app-logo"
              width={12}
              height={12}
              className="rotate-90" // <-- Flip the image back to upright
            />
            <span className="text-xs text-white font-semibold"> Rose</span>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center gap-1 max-lg:justify-center mb-4 mt-8"
        >
          <Image src="/icons/logo.svg" alt="app-logo" width={23} height={23} />
          <h1 className="text-20 font-semibold">Podcastr</h1>
        </Link>
        <p className="text-14 text-white-2">to continue to Podcastr</p>
        <div className="flex items-center gap-2 my-7">
          <div className="h-12 w-12 border-[3px] border-black-2 rounded-md flex justify-center items-center">
            <Image
              src="/icons/google.svg"
              alt="app-logo"
              width={23}
              height={23}
            />
          </div>
          <div className="h-12 w-12 border-[3px] border-black-2 rounded-md flex justify-center items-center">
            <Image
              src="/icons/github.svg"
              alt="app-logo"
              width={23}
              height={23}
            />
          </div>
        </div>
      {children}

        <button className="bg-orange-1 w-full mb-7 px-2 h-9 font-normal rounded-md text-12">
          CONTINUE
        </button>
        <div className="flex justify-between items-center">
           <AuthText/>
          <div className="flex items-center gap-3">
            <p className="text-14 text-white-2">Help</p>
            <p className="text-14 text-white-2">Privacy</p>
            <p className="text-14 text-white-2">Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
