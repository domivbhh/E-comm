import React, { useEffect, useState } from 'react'
import loginSignupImage from '../assest/login-animation.gif'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import ImagetoBase64 from '../utils/imgtobase64.js';
import { API_URL } from "../constants/app.constant.js";


const Signup = () => {
    const[data,setData]=useState({
        firstname:'',
        lastname:'',
        email:"",
        password:'',
        image:"",
        confirmpassword:""
    })
    const navigate=useNavigate()
    const[img,setImg]=useState(undefined)
    const[error,setError]=useState(undefined)
    const[perc,setPerc]=useState(undefined)


    // console.log('error',error);


    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        const{firstname,email,lastname,password,confirmpassword}=data
        if(firstname && email && password && confirmpassword ){
            if(password===confirmpassword){
              const url = `https://e-comm-backend-l9pn.onrender.com/auth/signup`;
              
              const fetchData = await fetch(url,{
                method:'POST',
                headers:{
                  "content-type":"application/json",
                },
                body:JSON.stringify(data)
              });
              const resp=await fetchData.json()
              if(resp.message.code===11000){
                toast('Email id already exists')
              }
              else{
                  toast(resp.message);
                  navigate(
                    "https://e-comm-backend-l9pn.onrender.com/auth/signin"
                  );
              }
            }
            else{
                alert('check the details again')
            }
        }
        else{
            alert('please fill all the fields')
        }

    }


    // const handleProfileImage= (file)=>{
    //   const storage=getStorage(app)
    //   const fileName=new Date().getTime()+file.name
    //   const storageRef=ref(storage,fileName)
    //   const uploadTask=uploadBytesResumable(storageRef,file)

    //   uploadTask.on('state_changed',(snapshot)=>{
    //     const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
    //     setPerc(Math.round(progress))
    //   },
    //   (error)=>{
    //     setError(error)
    //   },
    //   ()=>{
    //     getDownloadURL(uploadTask.snapshot.ref).then((url)=>setData({...data,image:url}))
    //   }
    // )        
    // }

    const handleImages=(images)=>{
      setImg(images[0])
      // setImg(e && e[0])
    }


    useEffect(()=>{
      if(img){
        handleProfileImage(img)
      }
    
    },[img])



  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
        <h1 className='text-center text-2xl font-bold'>Signup</h1>
        {/* <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={data.image? data.image : loginSignupImage} alt="" className="w-auto h-20 object-cover" />
          <label htmlFor="profile" className="cursor-pointer">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center bg-opacity-70">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type="file" id="profile" className="hidden "onChange={(e)=>handleImages(e.target.files)} accept='image/*' />
          </label>
        </div> */}

        <form action="" className="py-2" onSubmit={handleSubmit}>
          <label htmlFor="" className="">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={data.firstname}
            onChange={(e) => handleChange(e)}
            name="firstname"
            className="mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg focus-within:outline-blue-500"
          />
          <label htmlFor="" className="">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={data.lastname}
            onChange={(e) => handleChange(e)}
            name="lastname"
            className="mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg focus-within:outline-blue-500"
          />
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
            autoComplete="on"
            className="mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg focus-within:outline-blue-500"
          />
          {/* <input type="text" id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-300 py-1 px-2 rounded-lg' /> */}
          <label htmlFor="" className="">
            Confirm Password
          </label>
          <input
            type="password"
            value={data.confirmpassword}
            onChange={(e) => handleChange(e)}
            id="confirmpassword"
            autoComplete="on"
            name="confirmpassword"
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
          Already had an Account ?{" "}
          <Link to={"/login"} className="text-red-500 font-medium mt-3 ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup
