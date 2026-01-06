// lib/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3030",
  withCredentials: true,
});

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If it's a 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Don't retry if we are already on sign-in or refresh endpoints
      if (
        originalRequest.url.includes("/auth/sign-in") ||
        originalRequest.url.includes("/auth/refresh")
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        // Attempt to refresh token via the Next.js API route
        // This route will handle the HttpOnly cookie updating
        await axios.post("/api/auth/refresh", {}, { withCredentials: true });

        // If refresh succeeded, retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, we might want to redirect to login
        // But the ProtectedRoute/AuthGuard will handle this by seeing isAuthenticated=false
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
