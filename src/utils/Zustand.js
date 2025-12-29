import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "./axios";

export const useAuthStore = create(persist((set) => ({
    User: null,
    isLoggedIn: false,
    setUser: (user) => set({
        User: user,
        isLoggedIn: true
    }),
    logOut: async () => {
        await axios.get("/api/logout")
        set({
        User: null,
        isLoggedIn: false
    })}
}), {
    name: "auth-store"
}))