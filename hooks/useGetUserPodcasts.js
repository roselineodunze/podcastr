import React, { useEffect, useState } from "react";
import {
  collection,
  orderBy,
  query,
  where,
  limit,
  getDocs,
} from "firebase/firestore";
import { showToast } from "@/utils/showToast";
import useUserProfileStore from "@/stores/userProfileStore";
import usePodcastStore from "@/stores/podcastStore";
import { firestore } from "@/firebase/firebase";

const useGetUserPodcasts = () => {
  const { userProfile } = useUserProfileStore();
  const { podcasts, setPodcasts } = usePodcastStore();

  useEffect(() => {
    if (!userProfile) return;

    const getPodcasts = async () => {
      try {
        const podcastsRef = collection(firestore, "podcasts");
        const q = query(podcastsRef, where("authorId", "==", userProfile.uid));
        const qSnapshot = await getDocs(q);
        const podcastData = [];
        qSnapshot.forEach((doc) => {
          podcastData.push({ ...doc.data(), id: doc.id });
        });
        podcastData.sort((a, b) => b.createdAt - a.createdAt);
        setPodcasts(podcastData);
      } catch (err) {
        showToast.error("Error.", "Couldn't get user podcasts.");
      }
    };
    if (userProfile) getPodcasts();
  }, [userProfile, setPodcasts]);

  return { podcasts };
};

export default useGetUserPodcasts;
