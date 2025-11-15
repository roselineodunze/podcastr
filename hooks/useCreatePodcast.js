"use client";
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
import { useRouter } from "next/navigation";
import { useState } from "react";

const useCreatePodcast = () => {
  const { addPodcast } = useUserProfileStore();
  const { user } = useAuthStore();
  const { createPodcast } = usePodcastStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePodcastCreation = async (podcastData) => {
    setLoading(true);
    if (!podcastData) {
      return;
    }
    const newPodcast = {
      podcastTitle: podcastData.podcastTitle,
      podcastDescription: podcastData.podcastDescription,
      audioStorageId: podcastData.audioStorageId,
      imageUrl: "",
      imageStorageId: "",
      author: user.username,
      authorId: user.uid,
      authorImageUrl: user.profilePicURL,
      voicePrompt: podcastData.voicePrompt,
      imagePrompt: "",
      voiceType: podcastData.selectedVoice,
      audioDuration: podcastData.audioDuration,
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
      setLoading(false);
      console.log("podcast created")
      router.push(`/podcast/${podcastDocRef.id}`);
    } catch (err) {
      console.log(err);
      showToast.error(
        "Failed to create podcast.",
        "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  };

  return { handlePodcastCreation, loading };
};

export default useCreatePodcast;
