const userModel=require('../models/userSchema'); 
const emailValidator=require('email-validator');

const signup=async(req,res,next)=>{
    const {name,email,password,confirmPassword}=req.body;
    console.log(name,email,password,confirmPassword);
        
   if(!name || !email || !password || !confirmPassword){
    return res.status(400).json({
          success:false,
          message:'Every field is required'
    })
   }

   const validEmail=emailValidator.validate(email);
   if(!validEmail){
    return res.status(400).json({
        success:false,
        message:'Please provide valid email id'
  })
   }

   if(password!== confirmPassword){
    return res.status(400).json({
        success:false,
        message:'password and confirm password doesnot match'
  })
   }


    try {
        const userInfo=userModel(req.body)
        const result=await userInfo.save();

        return res.status(200).json({
            success:true,
            data:result
        })
    
    } catch (e) {
        //sends message for the email is not unique
             if(e.code===11000){
                return res.status(400).json({
                    success:false,
                    message:'Account already existed with provided email id '
                })
             }
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }


}

/******************************************************
 * @SIGNIN
 * @route /api/auth/signin
 * @method POST
 * @description verify user and send cookie with jwt token
 * @body email , password
 * @returns User Object , cookie
 ******************************************************/

const signin=async(req,res)=>{

const { email,password}=req.body;

if(!email || !password){
    return res.status(400).json({
          success:false,
          message:'Every field is mandatory'
    })
   }

try {
    const user=await userModel.
findOne({
    email
})
.select('+password')

if(!user || user.password!==password){
    return res.status(400).json({
        success:false,
        message:'invalid credentials'
})
}

const token=user.jwtToken();
user.password=undefined;

const cookieOption={
    maxAge:24*60*60*10000,
    httpOnly:true
};

res.cookie("token",token, cookieOption);
res.status(200).json({
    sucess:true,
    data:user
})
} catch (err) {
    return res.status(400).json({
        success:false,
        message:err.message
  })
}


}


const getUser=async(req,res,next)=>{
    const userId=req.user.id;
try {
    const user= await userModel.findById(userId);
    return res.status(200).json({
        success:true,
        data:user
    })

    
} catch (err) {
    return  res.status(400).json({
        success:false,
        message:e.message
    })
}
}


module.exports={
    signup,
    signin,
    getUser
}