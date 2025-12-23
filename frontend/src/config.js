// src/config.js
const isProduction = import.meta.env.MODE === 'production';

// If we are in production (Vercel), use the Render Backend URL.
// If we are local, use localhost:5000.
export const VITE_API_URL = isProduction 
  ? "https://parallelmind.onrender.com" // 👈 We will update this later after deploying backend
  : "http://localhost:5000";