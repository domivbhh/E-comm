const HomeCard=({ele})=>{
    const {name,image,category,price}=ele
    return(
        // <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
        <div>
        {name &&
            (<div>
                <div className="bg-white p-2 rounded  shadow-md">
                <img src={image} className="w-40 min-h-[250]" alt="" />
                <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name && name }</h3>
                <p className="text-center font-medium text-red-500">{category && category }</p>
                </div>
                </div>)
            }
    </div>
    )

}

export default HomeCard