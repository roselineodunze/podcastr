import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserprofile: (userProfile) => set({ userProfile }),
  addPodcast: (podcastDoc) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        podcasts: [podcastDoc.id, ...state.userProfile.podcasts],
      },
    })),
}));

export default useUserProfileStore;
