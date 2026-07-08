import axios from "axios";

// In development this falls back to your local backend.
// In production (Vercel), set VITE_API_URL in the project's
// Environment Variables to your deployed backend's URL, e.g.
// https://your-backend.onrender.com/api
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
});

export default api;
