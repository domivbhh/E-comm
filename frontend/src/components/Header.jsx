import React, { useState } from 'react'
// import logo from '../assest/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";




import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/slice';
import toast from 'react-hot-toast';
import useOnlineCheck from '../utils/useOnlineCheck';

const Header = () => {
  const navigate=useNavigate()
  const[show,setShow]=useState(false)
  const dispatch=useDispatch()
  // const users = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  // console.log(cart.cart);
  // console.log(users?.user?.email)

  const datas = localStorage.getItem("user");
  const user = JSON.parse(datas);
  // console.log(user)

  
  // const statusCheck=useOnlineCheck()
  // console.log(statusCheck)


  const handleLogout=()=>{
    dispatch(logoutUser());
    localStorage.removeItem('user')
    toast.success('logout success')
    navigate('/login')
    
  }

// console.log(REACT_APP_SERVER_DOMAIN);

  return (
    <header className=" sticky shadow-md w-full h-16 px-2 md:px-4">
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-12 flex">
            {/* <img src={logo} alt="" className="h-full " />
             */}
            <FaCartShopping className="h-full size-9" />
            <span className="font-bold my-2">A to Z Cart</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <nav className=" gap-4 md:gap-6 text-base md:text-lg z-50 hidden md:flex">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            {/* <Link to={"/about"}>About</Link> */}
            {/* <Link to={"/menu"}>Menu</Link> */}
            {/* <Link to={"/contact"}>Contact</Link> */}
          </nav>
          <Link to={"/cart"}>
            <div className="text-2xl text-slate-600 cursor-pointer ">
              <FaCartArrowDown />
              <div className="absolute top-0 right-25 text-white bg-rose-400 h-7 p-2 text-xs w-8 pr-2 rounded-lg">
                {cart.cart.length}
              </div>
            </div>
          </Link>
          <div
            className="text-2xl text-slate-600 ml-2"
            onClick={() => setShow(!show)}
          >
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden shadow-md drop-shadow-md ">
              {user?.image ? (
                <img
                  src={user?.image}
                  className="object-cover"
                  alt=""
                  profile
                />
              ) : 
              (
                <FaUserAlt />
              )}
            </div>
            {show && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow-md drop-shadow-md my-3 min-w-[120px] text-center">
                {user?.email === "admin123@gmail.com" ? (
                  <Link to={"/new-product"}>
                    <p className="whitespace-nowrap right-0 text-xl cursor-pointer my-2">
                      Add Product
                    </p>
                  </Link>
                ) : (
                  ""
                )}

                {user?.firstname ? (
                  <p
                    className="whitespace-nowrap right-0 font-sm cursor-pointer"
                    onClick={() => handleLogout()}
                  >
                    Logout {user?.firstname}
                  </p>
                ) : (
                  <Link to={"/login"}>
                    <p className="whitespace-nowrap right-0 font-md cursor-pointer px-2">
                      Login
                    </p>
                  </Link>
                )}
                <nav className=" gap-4  text-base md:text-lg z-50 my-2 flex flex-col md:hidden ">
                  <Link to={"/"} className="px-2 py-1 text-md">
                    Home
                  </Link>
                  <Link to={"/products"} className="px-2 py-1 text-md">
                    Products
                  </Link>
                  {/* <Link to={"/about"} className="px-2 py-1 text-md">
                    About
                  </Link>*/}
                  {/* <Link to={"/menu"} className='px-2 py-1 text-md'>Menu</Link> */}
                  {/* <Link to={"/contact"} className="px-2 py-1 text-md">
                    Contact
                  </Link>  */}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
