import {
  setDoc,
  doc,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import useAuthStore from "@/stores/authStore";
import useUserProfileStore from "@/stores/userProfileStore";
import { showToast } from "@/utils/showToast";
import { firestore } from "@/firebase/firebase";
import usePodcastStore from "@/stores/podcastStore";

const useCreatePodcast = () => {
  const { addPodcast } = useUserProfileStore();
  const { user } = useAuthStore();
  const { createPodcast } = usePodcastStore();

  //   const uploadPodcastImg = async (picture) => {
  //     if (!picture) return null;

  //     try {
  //       const response = await storageAPI.posts.upload(picture);

  //       const postImageURL = `${
  //         import.meta.env.VITE_APPWRITE_ENDPOINT
  //       }/storage/buckets/${
  //         import.meta.env.VITE_APPWRITE_POSTS_BUCKET_ID
  //       }/files/${response.$id}/view?project=${
  //         import.meta.env.VITE_APPWRITE_PROJECT_ID
  //       }`;

  //       return postImageURL;
  //     } catch (error) {
  //       console.error("Profile picture upload error:", error);
  //       throw new Error("Failed to upload profile picture");
  //     }
  //   };

  const handlePodcastCreation = async (podcastDetails) => {
    // if (!picture) {
    //   return showToast({
    //     title: "Failed to upload post.",
    //     description: "Please insert a picture.",
    //     status: "error",
    //   });
    // }
    // console.log("creating posts");
    if (!podcastDetails) {
      return;
    }
    const newPodcast = {
      podcastTitle: podcastDetails.podcastTitle,
      podcastDescription: podcastDetails.podcastDescription,
      audioUrl: "",
      audioStorageId: "",
      imageUrl: "",
      imageStorageId: "",
      author: user.username,
      authorId: user.uid,
      authorImageUrl: user.profilePicURL,
      voicePrompt: "",
      imagePrompt: "",
      voiceType: "",
      audioDuration: 0,
      views: 0,
      createdAt: Date.now(),
    };
    try {
      const podcastDocRef = await addDoc(
        collection(firestore, "podcasts"),
        newPodcast
      );
      const userDocRef = doc(firestore, "users", user.uid);

      await updateDoc(userDocRef, { podcasts: arrayUnion(podcastDocRef.id) });

      createPodcast({ ...newPodcast, id: podcastDocRef.id });
      addPodcast(podcastDocRef);

      showToast.success(
        "Podcast Created Successfully",
        "Your podcast was uploaded successfully."
      );
    } catch (err) {
      console.log(err);
      showToast.success(
        "Failed to create podcast.",
        "Something went wrong. Please try again."
      );
    }
  };

  return { handlePodcastCreation };
};

export default useCreatePodcast;
