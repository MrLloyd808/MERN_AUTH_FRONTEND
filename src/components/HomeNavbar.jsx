import { Leaf, Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const HomeNavbar = () => {
  return (
    <header className='flex items-center justify-between p-3 px-5 border-b'>
    
    <Link to={"/"} className='flex'> 
    <h2 className='font-semibold cursor-pointer flex gap-1'><Leaf />BLOGGR</h2>
    </Link>
    <Menu className='font-xl cursor-pointer'/>
    
    </header>
  )
}

