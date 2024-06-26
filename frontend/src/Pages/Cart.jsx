import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import loginSignupImage from "../assest/login-animation.gif";
import { Link } from 'react-router-dom';
import { addToCart, deleteCart, removeCart } from '../store/cartSlice';



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

      {cart.cart.map((ele, ind) => {
        return (
          <div className="flex flex-wrap md:justify-evenly " key={ele._id}>
            <div className="mx-auto justify-between bg-white drop-shadow-md my-5 px-4 py-5 hover:shadow-md border hover:scale-105 transition-all flex flex-col w-1/2 md:w-1/4">
              <div className="h-28 flex flex-col justify-center items-center">
                <img src={ele.image} alt="" className="h-full" />
              </div>
              <h3 className="font-semibold text-center text-slate-600  capitalize text-lg">
                {ele && ele.name}
              </h3>

              <p className=" font-medium text-center text-green-500">
                ₹{ele.price}
              </p>
              <div className="md:flex md:justify-evenly mx-auto">
                <button
                  className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer w-8 mx-10 "
                  onClick={() => dispatch(deleteCart(ele))}
                >
                  -
                </button>
                <p className=" font-medium text-center my-2 text-red-500">
                  Quantity:{ele && ele.qty}
                </p>

                <button
                  className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer w-8 mx-10 "
                  onClick={() => dispatch(addToCart(ele))}
                >
                  +
                </button>
              </div>
              <div className="mx-auto">
                <p className="text-red-500 font-semibold ">
                  ₹Total-{ele.qty * ele.price}
                </p>
              </div>
              <div className="mx-auto">
                <p
                  className="my-5  cursor-pointer text-red-500 font-semibold "
                  onClick={() => dispatch(removeCart(ind))}
                >
                  remove
                </p>
              </div>
              {/* <button className="bg-yellow-500 py-1 my-2 rounded-lg cursor-pointer"  onClick={()=>dispatch(deleteCart(data))}>
          delete
        </button> */}
            </div>
          </div>
        );
      })}
      {cart.cart.length > 0 ? (
        <div className="md:w-full md:max-w-md md:ml-[35%] mx-10">
          <h2 className="bg-slate-500 text-white p-2 text-lg">Summary</h2>
          <div className="flex w-full">
            <p className="mx-auto text-lg md:text-2xl font-bold text-red-600">
              Total qty-{cart.totalQty}
            </p>
          </div>
          <div>
            <p className=" text-center text-lg md:text-2xl font-bold text-red-600">
              Total Price-₹{cart.total}
            </p>
          </div>
          <button className="from-red-500 to-slate-400 w-full text-white bg-gradient-to-r h-12">
            Payment
          </button>
        </div>
      ) : (
        <div className="">
          <img
            src="https://cdn.dribbble.com/users/461802/screenshots/4421003/emptycart.gif"
            className="my-20 mx-auto w-60 h-60"
          />
          <p className='md:ml-[42%] ml-24 text-slate-600'>
            Go to product page--<Link className='text-red-700' to={"/products"}>Click here</Link>
          </p>
        </div>
      )}
    </div>
  );
}
}

export default Cart
