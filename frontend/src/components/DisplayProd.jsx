import React, { useEffect, useState } from 'react'
import { IoImage } from 'react-icons/io5';
import { useSelector, useDispatch } from "react-redux";
import CardFeature from '../Pages/CardFeature';


const DisplayProd = ({data}) => {
    //hooks
    const[datas,setDatas]=useState([])
    const product = useSelector((state) => state.product);  
    useEffect(()=>{
        setDatas(product.product.filter((ele)=>ele.category.toLowerCase()===data))
    },[data])
    

  return (
    <div className='flex flex-wrap justify-center my-5'>
        {
            datas.map((ele)=>{
                return <div className='flex my-4 mx-2 flex-wrap '>
                            <CardFeature data={ele}/>
                    </div>
            })
        }

      
    </div>
  )
}

export default DisplayProd
