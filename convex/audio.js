import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const getAudioUrl = query(async (ctx, { storageId }) => {
  if (!storageId) return null;
  const url = await ctx.storage.getUrl(storageId);
  return url;
});
