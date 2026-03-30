// Environment configuration - Switch between localhost and production

const getBaseURL = () => {
  // Check VITE_ prefixed env variable (set in .env or Vercel env vars)
  if (import.meta.env.VITE_BASE_URL) {
    return import.meta.env.VITE_BASE_URL;
  }

  // Auto-detect based on current hostname
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;

    // Localhost (Backend runs on port 9002)
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:9002/api/v1/";
    }

    // Production on Render backend
    return "https://property-wallah-backend.onrender.com/api/v1/";
  }

  // Default fallback
  return "https://property-wallah-backend.onrender.com/api/v1/";
};

export const BASE_URL = getBaseURL();

export const ENV_CONFIG = {
  isDevelopment: typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"),
  isProduction: typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1",
  baseURL: BASE_URL,
  apiTimeout: 30000,
};

export default ENV_CONFIG;
