import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector((state) => state.cart)

  return (
    <div className='flex flex-col justify-between items-center'>
        {
          cart.map((obj, index) => <CartItem obj={obj} key={index} />)
        }
    </div>
  )
}

export default Cart
