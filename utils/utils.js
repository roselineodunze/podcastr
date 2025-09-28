import { resolve } from "path";

export const base64ToBlob = (base64, type = "audio/mp3") => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type });
};

export const getAudioDuration = (audioBlob) => {
  return new Promise((resolve, reject) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    const audioElement = new Audio(audioUrl);

    audioElement.addEventListener("loadedmetadata", () => {
      console.log("⏱️ Audio duration:", audioElement.duration);
      resolve(audioElement.duration);
    });
    audioElement.addEventListener("error", (e) => {
      reject(e);
    });
  });
};

