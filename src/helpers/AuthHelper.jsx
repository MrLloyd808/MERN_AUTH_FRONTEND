import { Navigate } from "react-router-dom"
import { useAuthStore, isLoading } from "../utils/Zustand"
import Spinner from "../components/Spinner"

function AuthHelper({ children }) {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)


    {/* check if authenticated, if not go to authenticate */}
    if (!isLoggedIn) return <Navigate to={'/auth/login'}/>

    {/* if yes, render the child*/}
    return children
}

export default AuthHelper