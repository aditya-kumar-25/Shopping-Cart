import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import Summary from './Summary'
import { Link } from 'react-router-dom'

function CartHome() {

    
    const cart = useSelector((state) => state.cart)

    console.log('hello hi' , cart);

  return (
    <div className='flex ml-5 justify-center items-center'>

        {
            cart.length > 0 ? 
            (
                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='w-[55vw]'>
                        <Cart />
                    </div>
                    <div className='w-full'>
                        <Summary />
                    </div>

                </div>
            )
            :
            (
                <div className=' fixed top-[50%] flex flex-col items-center gap-3'>
                    <p className='font-bold'>
                        YOUR CART IS EMPTY!
                    </p>
                    <Link to='/'><button className=' py-3 border-2 border-[#20842f] bg-[#20842f] font-[700] text-white px-7 rounded-3xl hover:bg-[#ffffff] hover:text-[#20842f] duration-500'>SHOP NOW</button></Link>
                </div>
            )
        }

    </div>
  )
}

export default CartHome
