import { showToast } from "@/utils/showToast";
import React, { useState } from "react";

const usePreviewImg = () => {
  const [selectedImgFile, setSelectedImgFile] = useState(null);
  const [remoteFile, setRemoteFile] = useState(null);
  const maxFileSize = 2 * 1024 * 1024;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSize) {
        showToast.error("Error", "File size must be less than 2MB.");
        setSelectedImgFile(null);
        return;
      }
      setRemoteFile(file);
      console.log("remote file", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImgFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast.error("Error", "File size must be less than 2MB.");

      setSelectedImgFile(null);
    }
  };
  return {selectedImgFile, handleImageChange, setSelectedImgFile, remoteFile};
};

export default usePreviewImg;
