import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'
import './CartItem.css'

function CartItem({obj}) {

  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  function deleteItem(event){
      dispatch(remove(obj.id))
      toast.success('Item removed')
  }

  return (
    <div className='add mx-14 px-14 mt-8'>
        <div className=''>
            <img src={obj.image} alt='loading..' className='image ml-2 pl-4' />
        </div>
        <div className='flex flex-1 flex-col justify-between'> 
            <p className='font-bold'>{obj.title}</p>
            <p className=' font-serif'>{obj.description.split(' ').slice(0 , 15).join(' ') + '...'}</p>
            <div className='flex justify-between'>
              <p className='font-[800] text-[#4f9330]'>${obj.price}</p>
              <div className=' p-3 rounded-full bg-[#dc3f3f4f] flex justify-center items-center hover:bg-[#dc3f3f] hover:text-white duration-300'>
                <button onClick={deleteItem} className=''><MdDeleteOutline/></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem