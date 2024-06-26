import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, deleteCart } from '../store/cartSlice';



const CardFeature = ({data}) => {
  const dispatch=useDispatch()
  const{name,price,description,image,category}=data
    return (
      <div className="w-80 mx-8 justify-between bg-white drop-shadow-md px-4 py-5 hover:shadow-md border hover:scale-105 transition-all flex flex-col">
        <div className="h-28 flex flex-col justify-center items-center">
          <img src={image} alt="" className="h-full" />
        </div>
        <h3 className="font-semibold text-center text-slate-600  capitalize text-lg">
          {name && name}
        </h3>
        <p className=" font-medium text-center text-red-500">
          {category && category}
        </p>
        <p className=" font-medium text-center text-green-500">₹{price}</p>
        <button className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer"  onClick={()=>dispatch(addToCart(data))}>
          Add to Cart
        </button>
        {/* <button className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer"  onClick={()=>dispatch(deleteCart(data))}>
          delete
        </button> */}
      </div>
    );
}

export default CardFeature
