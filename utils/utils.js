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

export const getAudioDuration = (file) => {
  return new Promise((resolve, reject) => {
    const audioUrl = URL.createObjectURL(file);
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

export const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
