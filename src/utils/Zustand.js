import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const usePostStore = create(persist((set) => ({
    posts: [],
    setPosts: (posts) => set({
        posts: posts
    })
}), {
    name: "posts"
}))

export const usePostFormStore = create(persist((set) => ({
    formState: true,
    setFormState: (state) => set({
        formState: state
    })
}), {
    name: 'post-form'
}))