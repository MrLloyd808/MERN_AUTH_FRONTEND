import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='flex items-center justify-center flex-col h-100'>
        <h1 className='font-semibold text-5xl'>
           <b>404</b>
        </h1>

        <p className='font-semibold text-sm'>The page you're looking for does not exist, <Link to={"/"} className='underline text-success'>Navigate Home</Link></p>
    </section>
  )
}

export default NotFound