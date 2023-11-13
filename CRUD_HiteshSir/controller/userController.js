const User=require('../models/userModel.js')

exports.home=(req,res)=>{
    res.send('hello world')
}

exports.createUser=async(req,res)=>{
   //extract info
   try {
     const {name,email}=req.body
    

    const user= await User.create({
        name,
        email
     })

     res.status(201).json({
        success:true,
        message:'User created succesfully',
        user
     })

   } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:'User not created'
        })
   }
}

exports.getUsers=async(req,res)=>{
try {
   const users= await User.find({});
   res.status(200).json({
    success:true,
    users
   })
    
} catch (error) {
    console.log(error);
        res.status(400).json({
            success:false,
            message:'User not created'
        })
}
}

exports.deleteUser=async(req,res)=>{
try {
    const userId=req.params.id
    const user=await User.findByIdAndDelete(userId)
    res.status(200).json({
        success:true,
        message:'user deleted succesfully'
       })
    
} catch (error) {
    console.log(error);
    res.status(400).json({
        success:false,
        message:'User not created'
    })
}

}