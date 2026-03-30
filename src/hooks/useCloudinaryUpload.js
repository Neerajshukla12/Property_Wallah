import { useState, useCallback } from "react";
import { CLOUDINARY_CONFIG, CLOUDINARY_URL } from "../config/cloudinary";

export const useCloudinaryUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = useCallback(async (file) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);
      formData.append("folder", CLOUDINARY_CONFIG.folder);

      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      setLoading(false);

      return {
        url: data.secure_url,
        publicId: data.public_id,
        size: data.bytes,
        width: data.width,
        height: data.height,
      };
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMsg);
      setLoading(false);
      throw err;
    }
  }, []);

  const uploadMultipleImages = useCallback(async (files) => {
    setLoading(true);
    setError(null);

    try {
      const uploadPromises = Array.from(files).map((file) => uploadImage(file));
      const results = await Promise.all(uploadPromises);
      setLoading(false);
      return results;
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Multiple upload failed";
      setError(errorMsg);
      setLoading(false);
      throw err;
    }
  }, [uploadImage]);

  return {
    uploadImage,
    uploadMultipleImages,
    loading,
    error,
  };
};
