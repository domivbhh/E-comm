import React, { useState } from 'react'
import { CiForkAndKnife } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";





const FilterProd = ({datas,setDisplay}) => {
// const[data,setData]=useState([])


// console.log(data)

const handleClick = (e) => {
  setDisplay(e.target.innerHTML)
  window.scrollTo({
    top:document.body.scrollHeight,
    behavior:'smooth'
  })
};




// console.log(filterProducts)

  return (
      <div
        onClick={(e) => handleClick(e)}
        className="">
        <div className="text-3xl p-5 rounded-full bg-yellow-500  hover:bg-violet-800 text-white cursor-text">
          <CiForkAndKnife />
        </div>
        <p className="text-center font-medium capitalize cursor-pointer">
          {datas}
        </p>
      </div>
    
  );
}

export default FilterProd
