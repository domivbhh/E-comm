const User=require('../Schema/userSchema.js')
const bcrypt=require('bcryptjs')

const signUp=async(req,res)=>{
    const {email,firstname,lastname,password,image,confirmpassword}=req.body
        try{
        const hashedPassword=await bcrypt.hash(password,10)
        console.log(hashedPassword)
        const result=await User({email,firstname,lastname,password:hashedPassword,image,confirmpassword:hashedPassword})
        await result.save()
        res.send({message:'Registration success'})
        }
        catch(e){
            res.status(400).json({message:e})
        }
    }
const signIn=async(req,res)=>{
    // console.log(req.body)
    const {email,password}=req.body
    const data=await User.find({email})
    const sendingData = await User.find({ email }).select([
      "-password",
      "-confirmpassword",
    ]);
    // console.log(data)
    if(data[0]){
            const verifyPassword = await bcrypt.compare(
              password,data[0].password
            )
            if(verifyPassword){
                res.json({message:'Login success',status:'success',data:sendingData[0]})
            }
            else{
                res.status(400).json({status:'fail',message:'Invalid password'})
            }
    }
    else{
        res.status(400).json({message:'Invalid Email'})

    }
        
        
    }


module.exports={signUp,signIn}