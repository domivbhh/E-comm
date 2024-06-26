import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import loginSignupImage from "../assest/login-animation.gif";
import { Link } from 'react-router-dom';
import { addToCart, deleteCart } from '../store/cartSlice';



const Cart = () => {
  const user=useSelector((state)=>state.user)
  const dispatch=useDispatch()
    // console.log(user)
    const cart=useSelector((state)=>state.cart)
    // console.log(cart.cart,cart.total)

    if(user?.user.firstname===undefined){
         return (
           <div className="w-1/2 h-1/5  text-2xl  text-center font-bold mx-auto">
             <img
               src={loginSignupImage}
               alt=""
               className="w-1/5 h-1/5 mx-auto"
             />
             {/* <h1>Please Login...! </h1> */}
             <p className="text-md text-slate-400">
               <Link to={"/login"}> Click here to Login</Link>
             </p>
           </div>
         );
    }
    else{
        
  return (
    <div>
      <div className="text-center">
        <h1 className="text-lg md:text-2xl font-bold  text-slate-600">
          Cart Lists
        </h1>
      </div>

      {cart.cart.map((ele) => {
        return (
          <div className="flex flex-wrap" key={ele._id}>
            <div className="mx-auto justify-between bg-white drop-shadow-md my-5 px-4 py-5 hover:shadow-md border hover:scale-105 transition-all flex flex-col w-1/2">
              <div className="h-28 flex flex-col justify-center items-center">
                <img src={ele.image} alt="" className="h-full" />
              </div>
              <h3 className="font-semibold text-center text-slate-600  capitalize text-lg">
                {ele && ele.name}
              </h3>

              <p className=" font-medium text-center text-green-500">
                ₹{ele.price}
              </p>
              <button
                className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer"
                onClick={() => dispatch(addToCart(ele))}
              >
                Add to Cart
              </button>
              <p className=" font-medium text-center text-red-500">
                Quantity:{ele && ele.qty}
              </p>
              <button
                className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer"
                onClick={() => dispatch(deleteCart(ele))}
              >
                Remove
              </button>
              {/* <button className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer"  onClick={()=>dispatch(deleteCart(data))}>
          delete
        </button> */}
            </div>
          </div>
        );
      })}
      {
      cart.cart.length>0 ?
      <h1 className="text-lg md:text-2xl font-bold text-red-600">
          Total Price-{cart.total}
      </h1>:
      ''}
    </div>
  );
}
}

export default Cart
