import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Summary() {

    const cart = useSelector((state) => state.cart)

    console.log('hi there' , cart);

    let cost = 0;

    cart.forEach((cartItem) => cost += cartItem.price);

  return (
    <div className=" py-8 flex flex-col justify-between w-full h-[80vh] px-4">
      <div>
        <div>
          <p className="text-[#247b23] text-xl">YOUR CART</p>
          <p className="text-[#618f2d] font-bold text-3xl">SUMMARY</p>
        </div>

        <div>
          <p className="font-[700]">Total Items: {cart.length}</p>
        </div>
      </div>

        <div>
            <p className="font-[700]">Total Amount: <span className="font-[800]">{cost}</span></p>
            <button className="py-[5px] bg-[#338120] text-white font-[700] font-sans w-full">CHECK OUT NOW</button>
        </div>

    </div>
  );
}

export default Summary;
