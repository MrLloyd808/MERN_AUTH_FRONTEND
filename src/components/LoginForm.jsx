import { Leaf } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import { useAuthStore } from '../utils/Zustand'

function LoginForm() {
  const {register, handleSubmit} = useForm()
  const setUser = useAuthStore((s) => s.setUser)
  const navigate = useNavigate()
  
  return (
    <>
    <form 
    onSubmit={handleSubmit(async (data) => {
      
      try {
         await axios.post("/auth/login", data)
         const newRes = await axios("/api/home")
         setUser(newRes.data?.user)
        if (newRes.status === 200) return navigate("/home")
         
      } catch (err) {
        console.error(err.message)
      }
    })}
    
    className='flex flex-col w-[80%] p-2 gap-3 max-w-100 shadow-lg bg-neutral rounded'>
    
<Link to={"/"} className='flex justify-center'><h3 className='text-center font-semibold m-1.5 flex'><Leaf />BLOGGR</h3></Link>

    {/* First input field */}
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
  <input type="email" autoFocus autoComplete='true' placeholder="mail@email.com" required {...register("email")}/>
</label>
<div className="validator-hint hidden">Enter valid email address</div>
{/* second form input */}

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
    {...register("password")}
    required
    autoComplete='true'
    placeholder="Password"
    minLength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p className="validator-hint hidden">
  Must be more than 6 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>

{/* button*/}
<button className="btn btn-active btn-success">Login</button>

<div className='flex w-full justify-between px-3'>
    <p>Dont have an account?</p> <Link to={"/auth/register"} className='underline font-semibold'>Sign Up</Link>
</div>

    </form>
    <ToastContainer /></>
  )
}

export default LoginForm