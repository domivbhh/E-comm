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
mongoose
  .connect(
    "mongodb+srv://hariharanvbit123:vb.2024@cluster0.sk7t1l7.mongodb.net/ecomm?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log(
        `Server is running at 4000 and db connected success`
      );
    });
  })
  .catch((e) => {
    console.log(e);
  });


app.use('/product',productRouter)
app.use('/auth',userRouter)
// app.use(express.static(path.join(__dirname,'/frontend/dist')))

// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'frontend','dist','index.html'))
// })