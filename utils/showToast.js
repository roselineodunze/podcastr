import { toaster } from "@/components/ui/toaster";

export const showToast = {
  success: (title, description) => {
    console.log("Creating toast:", { title, description }); // Debug log

    toaster.create({
      title,
      description,
      type: "success",
      duration: 4000,
    });
  },

  error: (title, description) => {
    toaster.create({
      title,
      description,
      type: "error",
      duration: 5000,
    });
  },

  info: (title, description) => {
    toaster.create({
      title,
      description,
      type: "info",
      duration: 3000,
    });
  },
};
