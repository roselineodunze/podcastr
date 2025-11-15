import { showToast } from "@/utils/showToast";
import { useState } from "react";

const usePreviewCustomAudio = ({ onFileSelect } = {}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null); 
  const maxDuration = 10;

  const handleAudioChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("audio/")) {
      const audio = new Audio(URL.createObjectURL(file));
      audio.onloadedmetadata = () => {
        if (audio.duration > maxDuration) {
          showToast.error(
            "Failed to upload podcast",
            "Audio duration is too long. Max duration is 10 seconds."
          );
          setSelectedFile(null);
          setAudioPreview(null);
        } else {
          console.log("Audio file is valid:", file);
          setSelectedFile(file);
          setAudioPreview(URL.createObjectURL(file));

          if (onFileSelect) onFileSelect(file);
        }
      };
    } else {
      showToast.error("Error", "Please upload a valid audio file.");
    }
  };

  return { handleAudioChange, selectedFile, audioPreview, setAudioPreview };
};

export default usePreviewCustomAudio;
