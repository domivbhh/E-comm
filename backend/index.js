const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
dotenv.config()

app.use(cors())
app.use(express.json({limit:'10mb'}))




app.get('/',(req,res)=>{
res.json({message:'hello world'})
})

app.post('/signup',(req,res)=>{
    res.send(req.body)
    // console.log(req.body)

})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})