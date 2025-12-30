import React, { useEffect } from 'react'
import { useAuthStore } from '../utils/Zustand'
import { HomeNavbar } from '../components/HomeNavbar'
import axios from '../utils/axios'


function Home() {
    const user = useAuthStore((state) => state.User)
    const setUser = useAuthStore((state) => state.setUser)
    useEffect(() => {
        axios("/api/home")
       .then((res) => setUser(res.data?.user))
       .then(console.log("i was fired"))
       .catch(() => {
        console("i failed")
        logOut})
      }, [])
  return (
    <main>
        <HomeNavbar />

        <section className='text-center p-5'>
       <p>welcome back {user.firstname + " " + user.lastname}</p>
        </section>
    </main>
  )
}

export default Home