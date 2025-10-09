"use client"
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
import { useState } from "react";

const useCreatePodcast = () => {
  const { addPodcast } = useUserProfileStore();
  const { user } = useAuthStore();
  const { createPodcast } = usePodcastStore();
  const [podcastId, setPodcastId] = useState(null)
  const [loading, setLoading] = useState(false)


  const handlePodcastCreation = async (podcastDetails) => {

    setLoading(true)
    if (!podcastDetails) {
      return;
    }
    const newPodcast = {
      podcastTitle: podcastDetails.podcastTitle,
      podcastDescription: podcastDetails.podcastDescription,
      audioStorageId: podcastDetails.audioStorageId,
      imageUrl: "",
      imageStorageId: "",
      author: user.username,
      authorId: user.uid,
      authorImageUrl: user.profilePicURL,
      voicePrompt: podcastDetails.voicePrompt,
      imagePrompt: "",
      voiceType: podcastDetails.selectedVoice,
      audioDuration: podcastDetails.audioDuration,
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

      setPodcastId(podcastDocRef.id)
      
      createPodcast({ ...newPodcast, id: podcastDocRef.id });
      addPodcast(podcastDocRef);

      showToast.success(
        "Podcast Created Successfully",
        "Your podcast was uploaded successfully."
      );
      setLoading(false)
    } catch (err) {
      console.log(err);
      showToast.error(
        "Failed to create podcast.",
        "Something went wrong. Please try again."
      );
    }
  };

  return { handlePodcastCreation, podcastId, loading };
};

export default useCreatePodcast;
