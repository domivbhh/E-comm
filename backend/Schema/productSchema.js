const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    price:{
            type:Number
    },
    description:{
            type:String
    }

})

const productModel=mongoose.model('Product',productSchema)
module.exports=productModel