import CreatePodcastForm from "@/components/create/CreatePodcastForm";

const CreatePodcast = () => {
  return (
    <div className="mt-9 flex justify-center">
      <section className="w-full">
        <h1 className="text-white-1 font-normal text-xl">Create Podcast</h1>
        <CreatePodcastForm/>
      </section>
    </div>
  );
};

export default CreatePodcast;
