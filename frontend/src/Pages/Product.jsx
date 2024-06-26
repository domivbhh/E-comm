import React, { useCallback, useEffect,useMemo,useState } from 'react'
import {useSelector, useDispatch } from "react-redux";
import {setProduct} from '../store/productSlice'
import CardFeature from './CardFeature.jsx';





const Product = () => {
  // const [datas,setDatas]=useState([])
  const dispatch=useDispatch()
  const datas=useSelector((state)=>state.product)
  // console.log(datas.product)
  const vegetables=datas.product.filter((ele)=>ele.category==='vegetable')
  const rice=datas.product.filter((ele)=>ele.category==='rice')
  const fruit=datas.product.filter((ele)=>ele.category==='fruit')
  const sweets = datas.product.filter((ele) => ele.category === "sweets");
  const chats = datas.product.filter((ele) => ele.category === "sweets");

  // console.log(vegetables)
  // console.log(rice)
  // console.log(fruit)
  // console.log(sweets)

return (
  <div>
    <div className="my-4">
      <h2 className="text-center w-1/2 mx-auto rounded-lg bg-slate-400 font-bold text-white text-2xl my-2">
        Vegetables
      </h2>
      <div className="flex gap-4 justify-evenly flex-wrap">
        {vegetables.map((ele) => (
          <CardFeature data={ele} key={ele._id} />
        ))}
      </div>
    </div>
    <div className="my-4">
      <h2 className="text-center font-bold text-white text-2xl w-1/2 mx-auto rounded-lg bg-slate-400 my-2">
        Fruits
      </h2>
      <div className="flex gap-4 justify-evenly flex-wrap">
        {fruit.map((ele) => (
          <CardFeature data={ele} />
        ))}
      </div>
    </div>
    <div className="my-4">
      <h2 className="text-center font-bold  w-1/2 mx-auto rounded-lg bg-slate-400 text-white text-2xl my-2">
        Rice
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {rice.map((ele) => (
          <CardFeature data={ele} />
        ))}
      </div>
    </div>
    <div className="my-4">
      <h2 className="text-center font-bold w-1/2 mx-auto rounded-lg bg-slate-400 text-white text-2xl my-2">
        sweets
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {sweets.map((ele) => (
          <CardFeature data={ele} />
        ))}
      </div>
    </div>
    <div className="my-4">
      <h2 className="text-center font-bold  w-1/2 mx-auto rounded-lg bg-slate-400 text-white text-2xl my-2">
        chats
      </h2>
      <div className="flex gap-4 justify-center flex-wrap">
        {chats.map((ele) => (
          <CardFeature data={ele} />
        ))}
      </div>
    </div>
  </div>
);
}

export default Product
