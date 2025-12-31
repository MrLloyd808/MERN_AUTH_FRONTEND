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
    logOut: () => {
        set({
        User: null,
        isLoggedIn: false
    })}
}), {
    name: "auth-store"
}))

export const isLoading = create((set) => ({
    loading: true,
    setIsLoading: (state) => set({
       loading: state
    })
}))