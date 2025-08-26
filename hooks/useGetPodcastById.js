import { useState, useCallback, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { showToast } from "@/utils/showToast";
import { firestore } from "@/firebase/firebase";

const useGetPodcastById = (podcastId) => {
  const [podcastDetails, setPodcastDetails] = useState(null);

  const getPodcastDetails = useCallback(async () => {
    try {
      const podcastRef = doc(firestore, "podcasts", podcastId);
      const qData = await getDoc(podcastRef);

      if (!qData.exists()) {
        setPodcastDetails(null);
        return;
      }

      const podcastDoc = qData.data();
      setPodcastDetails(podcastDoc);
    } catch (err) {
      showToast.error("Error.", "Something went wrong.");
    }
  }, [podcastId]);

  useEffect(() => {
    if (podcastId) {
      getPodcastDetails();
    }
  }, [podcastId, getPodcastDetails]);

  return { podcastDetails };
};

export default useGetPodcastById;
