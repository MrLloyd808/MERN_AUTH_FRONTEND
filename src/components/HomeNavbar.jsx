import { Leaf, LogOut, Menu } from 'lucide-react'
import { useAuthStore } from '../utils/Zustand'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from '../utils/axios'

export const HomeNavbar = () => {
  const logOut = useAuthStore((state) => state.logOut)
  const navigate = useNavigate()
  return (
    <header className='flex items-center justify-between p-3 px-5 border-b'>
     <Menu className='font-xl cursor-pointer'/>
    <Link to={"/"} className='flex'> 
    <h2 className='font-semibold cursor-pointer flex gap-1'><Leaf />BLOGGR</h2>
    </Link>
    <button className='btn btn-success btn-sm' onClick={async () => {
      await axios.post("/auth/logout")
      logOut()
      navigate("/auth/login")
      }}>Logout</button>
    
    </header>
  )
}

