import { Leaf, LogOut, Menu } from 'lucide-react'
import { useAuthStore } from '../utils/Zustand'
import { Link } from 'react-router-dom'

export const HomeNavbar = () => {
  const logOut = useAuthStore((state) => state.logOut)
  return (
    <header className='flex items-center justify-between p-3 px-5 border-b'>
     <Menu className='font-xl cursor-pointer'/>
    <Link to={"/"} className='flex'> 
    <h2 className='font-semibold cursor-pointer flex gap-1'><Leaf />BLOGGR</h2>
    </Link>
    <button className='btn btn-success btn-sm' onClick={() => logOut()}>Logout</button>
    
    </header>
  )
}

