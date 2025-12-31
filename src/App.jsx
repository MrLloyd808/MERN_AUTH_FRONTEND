import React, { useEffect } from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import axios from './utils/axios'
import { isLoading, useAuthStore } from './utils/Zustand'
import Home from './pages/Home'
import AuthHelper from './helpers/AuthHelper'
import Spinner from './components/Spinner'

function App() {
  const logOut = useAuthStore((state) => state.logOut)
  const setUser = useAuthStore((state) => state.setUser)
  const User = useAuthStore((state) => state.User)
  const setIsLoading = isLoading((s) => s.setIsLoading)
  const loading = isLoading((s) => s.loading)

  useEffect(() => {
   
   axios("/api/home")
   .then((res) => {
    setUser(res.data?.user)
    console.log(res)
  })
  .then(setIsLoading(false))
  .catch(() => logOut())
  }, [])

  if (loading) return <Spinner/>

  return (
    <Routes>
    <Route index element={<Hero />} />
      <Route path={"/auth/login"} element={<Login />} />
      <Route path={"/auth/register"} element={<Register />} />
      <Route path='/loader' element={<Spinner />} />
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