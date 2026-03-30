const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

/**
 * Uploads a single file directly to Cloudinary using unsigned upload.
 * @param {File} file - The file to upload
 * @param {Function} onProgress - Optional callback (0-100)
 * @returns {Promise<string>} - Secure Cloudinary URL
 */
export const uploadToCloudinary = async (file, onProgress) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "property-wallah");

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable && onProgress) {
        const percent = Math.round((e.loaded / e.total) * 100);
        onProgress(percent);
      }
    });

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        resolve(response.secure_url);
      } else {
        reject(new Error(`Cloudinary upload failed: ${xhr.statusText}`));
      }
    });

    xhr.addEventListener("error", () => {
      reject(new Error("Network error during Cloudinary upload"));
    });

    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`
    );
    xhr.send(formData);
  });
};

/**
 * Uploads multiple files to Cloudinary in parallel.
 * @param {File[]} files - Array of files
 * @param {Function} onProgress - Optional overall progress callback (0-100)
 * @returns {Promise<string[]>} - Array of secure Cloudinary URLs
 */
export const uploadMultipleToCloudinary = async (files, onProgress) => {
  const progresses = new Array(files.length).fill(0);

  const updateOverall = () => {
    if (onProgress) {
      const total = progresses.reduce((a, b) => a + b, 0);
      onProgress(Math.round(total / files.length));
    }
  };

  const urls = await Promise.all(
    files.map((file, i) =>
      uploadToCloudinary(file, (pct) => {
        progresses[i] = pct;
        updateOverall();
      })
    )
  );

  return urls;
};
