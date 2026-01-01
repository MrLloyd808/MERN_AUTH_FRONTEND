import React from 'react'
import { useAuthStore } from '../utils/Zustand'

function Sidebar() {
    const user = useAuthStore((s) => s.User)
  return (
    <section >
    <div>{user.firstname + " " + user.lastname}</div> 
    </section>
  )
}

export default Sidebar