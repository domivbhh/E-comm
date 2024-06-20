import React, { useState } from 'react'
// import logo from '../assest/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";




import { Link } from 'react-router-dom';
import { logoutUser } from '../store/slice';
import toast from 'react-hot-toast';

const Header = () => {
  const[show,setShow]=useState(false)
  const dispatch=useDispatch()
  const users = useSelector((state) => state.user);
  console.log(users)


  const handleLogout=()=>{
    dispatch(logoutUser());
    toast.success('logout success')
  }



  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-12 flex">
            {/* <img src={logo} alt="" className="h-full " />
             */}
            <FaCartShopping className="h-full size-9" />
            <span className="font-bold my-2">Shop with Me</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg z-50">
            <Link to={"/new-product"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <Link to={"/cart"}>
            <div className="text-2xl text-slate-600 cursor-pointer ">
              <FaCartArrowDown />
              <div className="absolute top-0 right-25 text-white bg-rose-400 h-7 p-2 text-xs w-8 pr-2 rounded-lg">
                11
              </div>
            </div>
          </Link>
          <div
            className="text-2xl text-slate-600 ml-2"
            onClick={() => setShow(!show)}
          >
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden shadow-md drop-shadow-md ">
              {users.user.image ? (
                <img
                  src={users.user.image.toString()}
                  className="object-cover"
                  alt=""
                  profile
                />
              ) : (
                <FaUserAlt />
              )}
            </div>
            {show && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow-md drop-shadow-md my-3">
                <Link to={"/products"}>
                  <p className="whitespace-nowrap right-0 text-xl cursor-pointer my-2">
                    Product
                  </p>
                </Link>
                
                {users?.user.firstname ? (    
                    <p
                      className="whitespace-nowrap right-0 text-xl cursor-pointer"
                      onClick={()=>handleLogout()}>
                      Logout
                    </p>
                  )
                : (
                  <Link to={"/login"}>
                    <p className="whitespace-nowrap right-0 text-xl cursor-pointer">
                      Login
                    </p>
                  </Link>
                )
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
