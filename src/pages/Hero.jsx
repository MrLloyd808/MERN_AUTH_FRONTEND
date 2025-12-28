import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <main>
        <Header />

        <section>
            <p className='text-center pt-9 text-xl text-success uppercase'>Stories & Reflections</p>
            <h1 className='text-4xl text-center mt-6'>Words that  <b className='text-success'>Wander,</b>
Thoughts that Stay</h1>

<p className='text-center px-4 pt-4 my-5'>A personal collection of essays, musings, and explorations on life, creativity, and the art of living with intention. Welcome to my corner of the internet.</p>
        <div className='flex gap-2 w-full justify-center'>
            
            <Link to={"/auth/register"}>
            <button className='btn btn-error'>Get Started</button>
            </Link>
            <Link to={"/auth/login"}>
            <button className='btn btn-success'>Log In</button>
            </Link>
            
        </div>
        
        </section>
    </main>
  )
}

export default Hero