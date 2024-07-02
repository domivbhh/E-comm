const mongoose=require('mongoose')


//product schema validation
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


//product model
const productModel=mongoose.model('Product',productSchema)
module.exports=productModel