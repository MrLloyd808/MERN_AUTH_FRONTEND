import React, { useEffect } from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import axios from './utils/axios'
import { useAuthStore } from './utils/Zustand'
import Home from './pages/Home'
import AuthHelper from './helpers/AuthHelper'

function App() {
  const logOut = useAuthStore((state) => state.logOut)
  const setUser = useAuthStore((state) => state.setUser)
  const User = useAuthStore((state) => state.User)

  useEffect(() => {
   axios("/api/home")
   .then((res) => {
    setUser(res.data?.user)
  })
   .catch(() => logOut())
  }, [])

  return (
    <Routes>
    <Route index element={<Hero />} />
      <Route path={"/auth/login"} element={<Login />} />
      <Route path={"/auth/register"} element={<Register />} />
      <Route path='/home' element={
        <AuthHelper>
          <Home />
        </AuthHelper>
        }
         />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App