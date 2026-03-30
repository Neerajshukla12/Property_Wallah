// Cloudinary Configuration
export const CLOUDINARY_CONFIG = {
  cloudName: "dvdskww10",
  uploadPreset: "property_img",
  folder: "property-wallah/properties",
};

// Cloudinary Upload URL
export const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/auto/upload`;
