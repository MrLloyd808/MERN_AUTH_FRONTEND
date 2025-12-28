import React from 'react'
import Header from '../components/Header'
import { useAuthStore } from '../utils/Zustand'


function Home() {
    const user = useAuthStore((state) => state.User)
  return (
    <main>
        <Header />

        <section className='text-center p-5'>
       <p>welcome back {user.firstname + " " + user.lastname}</p>
        </section>
    </main>
  )
}

export default Home