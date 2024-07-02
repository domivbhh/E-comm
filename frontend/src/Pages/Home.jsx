import React, { useEffect, useState,useCallback } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import ImagetoBase64 from "../utils/imgtobase64.js";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setPages, setProduct } from "../store/productSlice.jsx";
import HomeCard from './HomeCard.jsx';
import CardFeature from './CardFeature.jsx';
import Shimmer from '../components/Shimmer.jsx';
import FilterProd from '../components/FilterProd.jsx';
import DisplayProd from '../components/DisplayProd.jsx';
import { Link } from 'react-router-dom';




const Home = () => {
  
  //hooks
  const dispatch = useDispatch();
  const[display,setDisplay]=useState([])
  const[page,setPage]=useState(0)
  const[limit,setLimit]=useState(5)
  const product = useSelector((state) => state.product);


  //product filtering for filtering icons
  const vegetableProduct=product.product.filter((ele)=>ele.category==='vegetable')
  const fruitProduct = product.product.filter(
    (ele) => ele.category === "fruit"
  );


  //array for shimmer ui
  const loadingArray=Array.from({length:4},(_,ind)=>{
    return ind
  })


//function for fetching products
  const fetchProducts = async () => {
    const data = await fetch(`http://localhost:4000/product/products/${product.pages}/${limit}`);
    const resp = await data.json();
    resp.data.map((ele)=>{
      dispatch(setProduct(ele));
    })
    
  };


//infinte scrolling feature
  useEffect(() => {
    const onScroll=()=>{
      if(window.innerHeight+window.scrollY>=window.document.body.offsetHeight-20){
          dispatch(setPages())
      }
    }
    window.addEventListener('scroll',onScroll)
    if(product.pages<=5){
      fetchProducts()
    }
    return ()=>{
      window.removeEventListener('scroll',onScroll)
    }
  }, [product.pages]);




//for unique category list
const categoryList = [
  ...new Set(product.product.map((ele) => ele.category)),
];


  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2 py-4">
          <div className="md:flex flex-row gap-3 md:w-1/4 items-center rounded-full md:h-10 h-18 hidden bg-slate-400 px-2 ">
            <p className="font-semibold text-white">
              {" "}
              Bike-Delivery
            </p>
            <img
              src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-bicycle-icon-png-image_3985605.jpg"
              alt=""
              className="h-7 bg-slate-400"
            />
          </div>
          <h2 className="text-4xl font-bold md:text-7xl py-3 ">
            The Fastest Delivery to{" "}
            <span className="text-red-600">Your Home</span>
          </h2>
          <p className="text-base py-3 max-w-sm-lg">
            Through A to Z Cart , we promptly locate the highest-rated bike
            courier near your vicinity, ensuring speedy delivery and top-notch
            service for the recipient.
          </p>
          <button className="text-bold bg-red-500 text-slate-200 px-3 py-2 rounded-md">
            <Link to={'/products'}>All Products</Link>
          </button>
          <button onClick={()=>window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})} className="md:inline-block text-bold bg-red-500 mx-5 text-slate-200 px-3 py-2 rounded-md hidden">
            See specials
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">


{/* //images for home container */}
          {product.product.length > 0
            ? product.product?.slice(0, 5).map((ele) => {
                return <HomeCard ele={ele} key={ele._id} />;
              })
            : loadingArray.map((ele,ind) => <Shimmer key={ind} />)}
        </div>
      </div>


{/* //vegetable section */}
      {vegetableProduct.length > 0 ? (
        <div className="">
          <div className="flex w-full items-center">
            <h2 className="font-bold text-2xl text-slate-800 my-4 text-center">
              Fresh Vegetables
            </h2>
          </div>
          <div className="flex gap-3 flex-wrap justify-center ">
            {
              vegetableProduct.map((ele) => {
                return <CardFeature data={ele} key={ele._id+'vege'}/>;
              })
            }
          </div>
        </div>
      ) : (
        ""
      )}

{/* fruit sections */}
      {fruitProduct.length > 0 ? (
        <div className="">
          <h2 className="font-bold text-2xl text-slate-800 my-4 ">
            Fresh Fruits
          </h2>
          <div className="flex gap-3 flex-wrap justify-center">
            {fruitProduct.map((ele) => {
              return <CardFeature data={ele} key={ele._id+"fruit"} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}


{/* specials section */}
      { product.product.length > 0?
      <div className="md:my-5 md:block hidden">
        <h2 className="font-bold text-2xl text-slate-800 mb-4">Specials</h2>
        <div className="flex gap-4 justify-center ">
          {categoryList.length > 0 &&
            categoryList.map((ele,ind) => {
              return (
                <div className='flex flex-wrap md:block' key={ele}>
                <FilterProd datas={ele} setDisplay={setDisplay} />
                </div>
              );
            })}
        </div>
        <div>
          <DisplayProd data={display} />
        </div>
      </div>:''
      }
    </div>
  );
}

export default Home
