import { Leaf } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex items-center justify-between p-3 border-b'>
    
    <Link to={"/"} className='flex'> 
    <h2 className='font-semibold cursor-pointer flex gap-1'><Leaf />BLOGGR</h2></Link>
   
    <Link to={"/auth/login"}>
    <button className='btn btn-success btn-sm'>Log in</button>
    </Link>
    
    </header>
  )
}

export default Header