import { useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { showToast } from "@/utils/showToast";
import useUserProfileStore from "@/stores/userProfileStore";
import { firestore } from "@/firebase/firebase";

const useGetUserByUsername = (username) => {
//   const [isLoading, setIsLoading] = useState(true);
  const { userProfile, setUserprofile } = useUserProfileStore();

  const getUserProfile = useCallback(async () => {
    // setIsLoading(true);
    try {
      const usersRef = collection(firestore, "users");
      const q = query(usersRef, where("username", "==", username));
      const qData = await getDocs(q);

      if (qData.empty) {
        setUserprofile(null);
        return;
      }
      const userDoc = qData.docs[0]?.data();
      setUserprofile(userDoc);
    } catch (err) {
      showToast.error("Error.", "Something went wrong.",);
    } finally {
    //   setIsLoading(false);
    }
  }, [username, setUserprofile]);

  useEffect(() => {
    if (username) {
      getUserProfile();
    }
  }, [username, getUserProfile]);

  return { userProfile };
};

export default useGetUserByUsername;
