const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
dotenv.config()
const userRouter=require('./routes/userRoutes.js')
const productRouter=require('./routes/productRoutes.js')
// const path=require('path')

app.use(cors())
// let __dirname = path.resolve();
app.use(express.json({limit:'10mb'}))

mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URI).then(()=>{ 
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT} and db connected success`);
});
})
.catch((e)=>{
    console.log(e)
})


app.use('/product',productRouter)
app.use('/auth',userRouter)
// app.use(express.static(path.join(__dirname,'/frontend/dist')))

// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'frontend','dist','index.html'))
// })