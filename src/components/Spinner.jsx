import React from 'react'
import { HashLoader } from 'react-spinners'

function Spinner() {
  return (
    <section className='h-screen flex items-center justify-center'>
       <HashLoader 
        color='green'
       />
    </section>
  )   
}

export default Spinner