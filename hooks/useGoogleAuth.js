"use client"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { showToast } from "@/utils/showToast";
import { auth, firestore } from "@/firebase/firebase";
import useAuthStore from "@/stores/authStore";


const useGoogleAuth = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {login} = useAuthStore();

  const loginGoogle = async () => {
    try {
      const result = await signInWithGoogle();

      if (result?.user) {
        const { uid, email } = result.user;
        const userRef = doc(firestore, "users", uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          console.log("acct exists");
          const loggedInUser = userDoc.data();
          console.log(loggedInUser)
          login(loggedInUser);
        } else {
          const newUserDoc = {
            uid: uid,
            email: email,
            username: uid,
            fullname: "",
            bio: "",
            profilePicURL: "",
            createdAt: Date.now(),
          };
          await setDoc(doc(firestore, "users", uid), newUserDoc);
          console.log(newUserDoc)
          login(newUserDoc);
        }
        showToast.success("Success", "Account Created");
      }
    } catch (err) {
      console.error(err);
      showToast({
        title: "Error.",
        description: error || "Something went wrong. Please try again.",
        status: "error",
      });
    }
  };

  return { loginGoogle, loading };
};

export default useGoogleAuth;
