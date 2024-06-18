import React, { useState } from 'react'
// import logo from '../assest/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";



import { Link } from 'react-router-dom';

const Header = () => {
  const[show,setShow]=useState(false)
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
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 cursor-pointer ">
            <FaCartArrowDown />
            <div className="absolute top-0 right-16 text-white bg-rose-400 h-7 p-2 text-xs w-8 pr-2 rounded-lg">
              11
            </div>
          </div>
          <div
            className="text-2xl text-slate-600 ml-2"
            onClick={() => setShow(!show)}
          >
            <div className="border-2 border-solid border-slate-400 p-1 rounded-xl mx-1 cursor-pointer">
              <FaUserAlt />
            </div>
            {show && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow-md drop-shadow-md my-3">
                <Link to={"/products"}>
                  <p className="whitespace-nowrap right-0 text-xl cursor-pointer my-2">
                    Product
                  </p>
                </Link>
                <Link to={'/login'}>
                <p className="whitespace-nowrap right-0 text-xl cursor-pointer">
                  Login
                </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
