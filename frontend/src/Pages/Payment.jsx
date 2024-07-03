import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { clearCart } from '../store/cartSlice'
import toast from 'react-hot-toast'

const Payment = () => {
  const carts=useSelector((state)=>state.cart)
  const{total,cart,totalQty}=carts
  const dispatch=useDispatch()
  const[data,setData]=useState({
    username:'',
    email:'',
    card:'',
    cardExp:""
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
 
  // console.log(data)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setData({
      username:'',
      email:'',
      card:'',
      cardExp:""
    })
    dispatch(clearCart())
    toast.success('Payment done')


  }


  return (
    <div className="flex md:flex-row flex-col gap-y-5 justify-center">
      <div className="md:w-1/3 w-full bg-gray-300 md:mx-5 mx-auto">
        <div className="mx-8">
          <p>Pay</p>
          <h2 className="text-4xl font-bold">₹{total}</h2>
        </div>
        <div className="my-5">
          {cart.map((ele) => {
            return (
              <div className="flex justify-between mx-0 mb-8">
                <div className="ml-6">
                  <p className='text-green-700'>{ele.name}</p>
                  <p>qty:{ele.qty}</p>
                </div>
                <div className='mr-6'>
                  <p>{ele.price*ele.qty}</p>
                  <p className="text-gray-400">{(ele.price*ele.qty )/ ele.qty}/each</p>
                </div>
              </div>
            );
          })}
          <hr />
          <p className="text-center">
            Total:{total}
            <span className="text-gray-500 mx-2">to be paid</span>
          </p>
        </div>
      </div>
      <form className="md:w-1/3 w-3/4 mx-auto md:mx-5 bg-gray-300 p-5 " onSubmit={handleSubmit}>
        <h2 className="font-medium mb-5">Pay with card</h2>
        <label className="font-medium mb-5">Email</label>
        <br />
        <input
          className="w-full p-2 mb-5"
          type="text"
          name='email'
          value={data.email}
          onChange={handleChange}
          placeholder="enter the email"
        />
        <br />
        <label className="font-medium mb-5">Card Information</label>
        <br />
        <input
          className="w-full p-2 mb-2"
          type="text"
          name='card'
          value={data.card}
          onChange={handleChange}
          placeholder="1234 1234 1234 1234 "
        />
        <input
          className="md:w-1/3 w-full p-2 md:ml-1"
          type="text"
          name='cardExp'
          value={data.cardExp}
          onChange={handleChange}
          placeholder="MM/YY"
        />
        <input
          className="md:w-1/3 w-full p-2 md:ml-12"
          type="text"
          placeholder="CVC "
        />
        <br />
        <label className="font-medium">Name on Card</label>
        <br />
        <input
          className="w-full p-2 mb-5"
          type="text"
          name='username'
          value={data.username}
          onChange={handleChange}
          placeholder="enter the name"
        />
        <br />
        <button className="bg-blue-500 w-3/4 md:ml-14 ml-6 my-2 cursor-pointer text-white p-3" type='submit' disabled={data.card===''& data.email===''}>Pay</button>
      </form>
    </div>
  );
}

export default Payment
