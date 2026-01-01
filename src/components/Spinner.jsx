import React from 'react'
import { HashLoader } from 'react-spinners'

function Spinner() {
  return (
    <section className='h-screen flex items-center justify-center'>
       <HashLoader 
        color='#C59F61'
       />
    </section>
  )   
}

export default Spinner