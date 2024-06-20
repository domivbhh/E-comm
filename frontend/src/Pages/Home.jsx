import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import ImagetoBase64 from "../utils/imgtobase64.js";



const Home = () => {
  const[data,setData]=useState({
    name:'',
    category:'',
    image:'',
    price:'',
    description:''
  })

    const uploadImage=async(file)=>{
            // console.log(file[0])
            const imgs = await ImagetoBase64(file[0]);
            setData({...data,image:imgs})
            
    }

    const handleChange=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(data)
    }


  return (
    <div className="p-4">
      <form
        action=""
        className="m-auto w-full max-w-md my-2 shadow flex flex-col bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="bg-slate-200 p-2 mx-1 my-1"
          value={data.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="categ"
          className="bg-slate-200 p-1 my-1 mx-1"
          onChange={(e)=>handleChange(e)}
        >
          <option>Vegetable</option>
          <option>Fruit</option>
          <option>Juices</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <label htmlFor="image" className="cursor-pointer">
          Image
          <div className="h-40 w-full bg-slate-300 my-1 rounded-md flex items-center justify-center">
            <span className="text-5xl">
              {!data.image?<IoCloudUploadOutline />:''}
            </span>
            <img src={data.image} className='h-full' alt="" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => uploadImage(e.target.files)}
              id="image"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          className="bg-slate-200 p-1 my-1 mx-1"
          id="price"
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          className="bg-slate-200 p-1 my-1 resize-none mx-1"
          name="description"
          onChange={(e) => handleChange(e)}
        ></textarea>

        <button className="bg-slate-500 hover:bg-slate-700 text-white text-lg font-md drop-shadow-md mx-2 my-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home
