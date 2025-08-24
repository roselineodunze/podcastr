import { create } from "zustand";

const usePodcastStore = create((set) => ({
  podcasts: [],
  createPodcast: (newPodcastDoc) => set((state) => ({ podcasts: [newPodcastDoc, ...state.podcasts] })),
  deletePodcast: (podcastId) =>
    set((state) => ({ podcasts: state.podcasts.filter((p) => p.id !== podcastId) })),
  setPodcasts: (podcasts) => set({ podcasts }),
//   addViews: (comment, postId) =>
//     set((state) => ({
//       posts: state.posts.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               comments: [...post.comments, comment],
//             }
//           : post
//       ),
//     })),
}));

export default usePodcastStore;
