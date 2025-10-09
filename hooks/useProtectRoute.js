import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { protectedRoutes } from "@/constants";
import { useRouter } from "next/navigation";

const useProtectRoute = (pathname) => {
  const [authUser] = useAuthState(auth);
  const router = useRouter();

  const protectRoute = () => {
    if (!authUser && protectedRoutes.includes(pathname)) {
      router.push("/sign-in");
    }
  };

  return { protectRoute };
};

export default useProtectRoute;
