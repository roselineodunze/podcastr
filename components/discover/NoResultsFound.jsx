import Image from "next/image";

const NoResultsFound = () => {
  return (
    <div className="h-[500px] flex flex-col items-center text-center justify-center">
      <Image src="/icons/search2.svg" alt="app-logo" width={170} height={170} className="mb-7" />
      <h1 className="text-white-1 font-semibold text-2xl mb-1">
        No results found
      </h1>
      <p className="text-white-2 text-[14px] w-60">
        A computer is an electronic device capable of performing computer
      </p>
    </div>
  );
};

export default NoResultsFound;
