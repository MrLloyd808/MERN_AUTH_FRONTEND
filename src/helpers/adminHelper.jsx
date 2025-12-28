import React from 'react'
import { useAuthStore } from '../utils/Zustand'
import { Navigate } from 'react-router-dom'

function adminHelper({ children }) {
    const user = useAuthStore((state) => state.user)

    if (user.role !== "admin") return <Navigate to={"/"} />

    return children
}

export default adminHelper