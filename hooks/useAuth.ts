"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await api.get("/auth/me");
        return response.data;
      } catch (error) {
        return null;
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      refetch();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    refetch,
    logout,
  };
};
