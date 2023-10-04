import React from "react";
import "./LoadItem.css";
import {add , remove } from '../redux/slices/CartSlice'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoadItem({ obj }) {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart)

  function addItem(event){
      dispatch(add(obj));
      toast.success('Item added successfully')
  }

  function removeItem(event){
    dispatch(remove(obj.id));
    toast.error('Item removed')
}

  return (
    <div
      className="flex flex-col justify-around items-center p-5 item rounded-lg gap-3 min-w-[220px] py-6
         hover:scale-110 transition duration-400 ease-in"
    >
      <div className=" px-[50px]">
        <p className="font-bold">
          {obj.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>

      <div className=" px-[50px]">
        <p className=" text-xs text-[#a49999]  font-serif">
          {obj.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <img src={obj.image} alt='loading..' className="mx-[10px] max-h-[200px] px-[50px]"></img>

      <div className="flex justify-around items-center w-full">
        <div className="text-[#51be36] font-[700]">${obj.price}</div>

        <div>

          {
            cart.some( (p) => p.id === obj.id ) ? 
            (
              <button className=" rounded-3xl px-[3px] text-sm border-2 border-[#1c3d58] my-4 add-button" onClick={removeItem}>
                REMOVE ITEM
            </button>
            ) :
            (
              <button className=" rounded-3xl px-[3px] text-sm border-2 border-[#1c3d58] my-4 add-button" onClick={addItem}>
              ADD TO CART
            </button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default LoadItem;
