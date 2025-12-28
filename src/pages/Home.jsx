import React from 'react'
import { useAuthStore } from '../utils/Zustand'
import { HomeNavbar } from '../components/HomeNavbar'


function Home() {
    const user = useAuthStore((state) => state.User)
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