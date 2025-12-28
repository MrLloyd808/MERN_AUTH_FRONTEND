import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(persist((set) => ({
    User: null,
    isLoggedIn: false,
    setUser: (user) => set({
        User: user,
        isLoggedIn: true
    }),
    logOut: () => set({
        User: null,
        isLoggedIn: false
    })
}), {
    name: "auth-store"
}))