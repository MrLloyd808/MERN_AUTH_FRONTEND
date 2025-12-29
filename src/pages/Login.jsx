import React from 'react'
import LoginForm from '../components/LoginForm'
import { ToastContainer } from 'react-toastify'

function Login() {
  return (
    
    <section className='flex items-center justify-center h-100'>
        <LoginForm />
        <ToastContainer />
    </section>
  )
}

export default Login