import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { showToast } from "@/utils/showToast";
import { auth, firestore } from "@/firebase/firebase";

const useGoogleAuth = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const loginGoogle = async () => {
    try {
      const result = await signInWithGoogle();

      if (result?.user) {
        console.log(result.user);
        const { uid, email } = result.user;
        console.log(uid, email)
        // const userRef = doc(firestore, "users", uid);
        // const userDoc = await getDoc(userRef);
        // if (userDoc.exists()) {
        //   console.log("acct exists");
        //   const loggedInUser = userDoc.data();
        // } else {
        //   const newUserDoc = {
        //     uid: uid,
        //     email: email,
        //     username: uid,
        //     fullname: "",
        //     bio: "",
        //     profilePicURL: "",
        //     followers: [],
        //     following: [],
        //     posts: [],
        //     createdAt: Date.now(),
        //   };
        //   await setDoc(doc(firestore, "users", uid), newUserDoc);
        // }
        showToast.success("Success", "Account Created");
      }
    } catch (err) {
      console.error(err);
      showToast({
        title: "Error.",
        description: error.message || "Something went wrong. Please try again.",
        status: "error",
      });
    }
  };

  return { loginGoogle, loading };
};

export default useGoogleAuth;
