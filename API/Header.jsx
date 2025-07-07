import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-4 bg-blue-500 text-white text-center'>
      <h2 className='text-2xl font-bold'>Welcome to My Website</h2>

      <div>
        <Link to="/" className='text-white hover:text-blue-200 transition'>Home</Link>
        <Link to="/about" className='ml-4 text-white hover:text-blue-200 transition'>About</Link>
        <Link to="/product" className='ml-4 text-white hover:text-blue-200 transition'>Product</Link>
        <Link to="/contact" className='ml-4 text-white hover:text-blue-200 transition'>Contact</Link>
        <Link to="/profile" className='ml-4 text-white hover:text-blue-200 transition'>Profile</Link>
      </div>
    </div>
    
  )
}

export default Header
