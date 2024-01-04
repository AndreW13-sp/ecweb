import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuth = create(
	persist(
		(set) => ({
			user: null,
			jwtToken: null,

			setUser: (newUser) => set({ user: newUser }),
			logout: () => set({ user: null }),

			setToken: (newToken) => set({ jwtToken: newToken }),
			clearToken: () => set({ jwtToken: null }),
		}),
		{ name: "auth", storage: createJSONStorage(() => localStorage) }
	)
);
