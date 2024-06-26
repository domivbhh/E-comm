import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import ImagetoBase64 from "../utils/imgtobase64.js";
import toast from "react-hot-toast";


const NewProducts = () => {
   const [data, setData] = useState({
     name: "",
     category: "",
     image: "",
     price: 0,
     description: "",
   });

   const uploadImage = async (file) => {
     // console.log(file[0])
     const imgs = await ImagetoBase64(file[0]);
     setData({ ...data, image: imgs });
   };

   const handleChange = (e) => {
     setData({ ...data, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     const { name, image, price, category } = data;

     if (name && image && price && category) {
       const fetchData = await fetch("http://localhost:4000/product/post", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(data),
       });
       const resp = await fetchData.json();
       console.log(resp);
       toast.success("Upload successfully");
       setData({
         ...data,
         name: "",
         price: 0,
         description: "",
         category: "",
         image: "",
       });
     } else {
       toast.error("enter the required fields");
     }
   };

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
           onChange={(e) => handleChange(e)}
           value={data.category}
         >
           <option>Select category</option>
           <option value={"vegetable"}>Vegetable</option>
           <option value={"fruit"}>Fruit</option>
           <option value={"juices"}>Juices</option>
           <option value={"sweets"}>Sweets</option>
           <option value={"chats"}>Junks</option>
           <option value={"biriyani"}>biriyaani</option>
           <option value={"pizza"}>Pizza</option>
           <option value={"rice"}>Rice meals</option>
         </select>

         <label htmlFor="image" className="cursor-pointer">
           Image
           <div className="h-40 w-full bg-slate-300 my-1 rounded-md flex items-center justify-center">
             <span className="text-5xl">
               {!data.image ? <IoCloudUploadOutline /> : ""}
             </span>
             <img src={data.image} className="h-full" alt="" />
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
           type="number"
           name="price"
           onChange={(e) => handleChange(e)}
           className="bg-slate-200 p-1 my-1 mx-1"
           id="price"
           value={data.price}
         />

         <label htmlFor="description">Description</label>
         <textarea
           rows={3}
           className="bg-slate-200 p-1 my-1 resize-none mx-1"
           name="description"
           onChange={(e) => handleChange(e)}
           value={data.description}
         ></textarea>

         <button className="bg-slate-500 hover:bg-slate-700 text-white text-lg font-md drop-shadow-md mx-2 my-2 rounded-lg">
           Submit
         </button>
       </form>
     </div>
   );
}

export default NewProducts
