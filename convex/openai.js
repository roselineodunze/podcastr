import { action } from "./_generated/server";
import { v } from "convex/values";
import axios from "axios";

export const generatePodcastAudio = action({
  args: {
    voicePrompt: v.string(),
    selectedVoice: v.string(),
  },
  handler: async (ctx, args) => {
    const apikey = process.env.SPEECHIFY_API_KEY;
    const url = "https://api.sws.speechify.com/v1/audio/speech";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apikey}`,
    };
    const data = {
      voice_id: args.selectedVoice,
      input: args.voicePrompt,
      audio_format: "mp3",
    };

    const response = await axios.post(url, data, {
      headers,
    });
    console.log("Speechify response:", response.data); // 👈 check what comes back
    return response.data.audio_data;
  },
});
