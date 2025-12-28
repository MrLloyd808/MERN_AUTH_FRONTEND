import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from '../utils/axios';
import { Leaf } from 'lucide-react';

function SignUpForm() {
  const moveTo = useNavigate()
  const {
    register,
    handleSubmit
  } = useForm();
  return (
    <form onSubmit={handleSubmit(async (data) => {

        const resData = await axios.post("/auth/register", data)
           
        console.log(resData)
        if (resData.status === 200) return moveTo("/auth/login")
        
        })}
    
    className='flex flex-col w-[80%] p-2 gap-3 max-w-100 shadow-lg bg-neutral rounded'>
    
    <Link to={"/"} className='flex justify-center'><h3 className='text-center gap-1 font-semibold m-1.5 flex'><Leaf />BLOGGR</h3></Link>
    {/* first input field || FIRSTNAME */}

        <label className="input validator w-full outline-0">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    {...register("firstname")}
    required
    placeholder="Firstname"
    minLength="4"
    title="Must be more than 4 characters."
  />
</label>
<p className="validator-hint hidden">
  Must be more than 4 characters.
  
</p>

{/* second input field || LASTNAME*/}

<label className="input validator outline-0 w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    required
    {...register("lastname")}
    placeholder="Lastname"
    minLength="4"
    title="Must be more than 8 characters."
  />
</label>
<p className="validator-hint hidden">
  Must be more than 4 characters.
  
</p>

{/* third input field || EMAIL*/}

<label className="input validator outline-0 w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@email.com" {...register("email")} required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>

{/* fouth input field || PASSWORD */}
<label className="input validator outline-0 w-full">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    required
    {...register("password")}
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

{/* BUTTON */}
<button className='btn btn-success'>Register</button>
<div className='flex w-full justify-between px-3'>
    <p>Already have an account?</p> <Link to={"/auth/login"} className='underline font-semibold'>Sign In</Link>
</div>
    </form>
  )
}

export default SignUpForm