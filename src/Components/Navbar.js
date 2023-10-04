import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link , NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-[#0e0b2b] flex justify-between px-16 py-10 h-[11vh] overflow-hidden items-center text-white w-[100vw]'>
        <div>   
            <NavLink to='/'>
              <img src='https://codehelp-shopping-cart.netlify.app/logo.png' alt='logo' className='h-[10vh]' />
            </NavLink>
        </div>

        <div className='flex items-center gap-2'>
            <NavLink to='/'><button>Home</button></NavLink>
            <div className='text-2xl '>
              <NavLink to='/cart'><FaShoppingCart className=''></FaShoppingCart></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
