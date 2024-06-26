const Product=require('../Schema/productSchema.js')

const getProducts=async(req,res)=>{
    const data=await Product.find({})
    if(data){
        res.status(200).json({data})
    }

}


const postProduct=async(req,res)=>{
    const{name,description,category,price,image}=req.body
    // console.log(name,price,category)

    const data=await Product(req.body)
    await data.save()

    res.status(200).json({message:data})
}





module.exports={getProducts,postProduct}