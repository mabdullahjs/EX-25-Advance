import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-12 my-4'>
        <p className='text-blue-400 text-3xl'><Link to={'/'}>Home</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'about'}>About</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'contact'}>Contact</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'service'}>Services</Link></p>
        <p className='text-blue-400 text-3xl'><Link to={'product'}>Product</Link></p>
    </div>
  )
}

export default Navbar