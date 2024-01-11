import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create(
	persist(
		(set) => ({
			user: null,
			jwtToken: null,

			// User data
			setUser: (user) => set({ user }),
			logout: () => set({ user: null }),

			// JWT Token
			setToken: (token) => set({ jwtToken: token }),
			clearToken: () => set({ jwtToken: null }),
		}),
		{ name: "auth-store" }
	)
);
