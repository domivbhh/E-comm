import React, { useState } from 'react'
import loginSignupImage from "../assest/login-animation.gif";
import { Link } from "react-router-dom";



const Signin = () => {
const [data, setData] = useState({
  email: "",
  password: "",
});


    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const {  email,password,  } = data;
      if (email.trim()!=='' || password.trim()!=='') {
        alert('login success')
      } 
      else {
        alert("please fill all the fields");
      }
    };





    return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={loginSignupImage} alt="" className="w-full" />
        </div>

        <form action="" className="py-2" onSubmit={handleSubmit}>
          
          <label htmlFor="" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
            name="email"
            className="mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg focus-within:outline-blue-500"
          />
          {/* <input type="text" id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg' /> */}
          <label htmlFor="" className="">
            Password
          </label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleChange(e)}
            id="password"
            name="password"
            autoComplete='on'
            className="mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg focus-within:outline-blue-500"
          />
         
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-800 text-center text-white p-2 mt-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
        <p>
          No Account?{'  '}
          <Link to={"/signup"} className="text-red-500 font-medium mt-3 ">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin
