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
  const audioUrl = URL.createObjectURL(audioBlob);
  const audioElement = new Audio(audioUrl);
  const durationInSeconds = 0;

  audioElement.addEventListener("loadedmetadata", () => {
    durationInSeconds = audioElement.duration;
    console.log("⏱️ Audio duration:", durationInSeconds);
  });

  return durationInSeconds;
};
