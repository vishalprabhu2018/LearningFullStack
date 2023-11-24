const JWT=require('jsonwebtoken');


const authenticateUser=(req,res,next)=>{
     
    const token=(req.cookies && req.cookies.token) || null;

    if(!token){
        return res.status(400).json({success:false, message:'Not authorized'});
    }
    try {
        const payload=JWT.verify(token,process.env.SECRET);
        req.user={id:payload.id, email:payload.email}
    } catch (error) {
        return res.status(400).json({success:false, message:error.message})  
    }   
    next();

}


const signupDataValidate=(req,res,next)=>{
    const { name, username, email, password, bio } = req.body;
    /// every field is required
    if (!name || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }

    next();
}

const loginDataValidate=(req,res,next)=>{
    const {username,password}=req.body;

    if(!username || !password){
      return res.status(400).json({
        success:false,
        message:'Every field is required'
      })
    }
    next();
}

module.exports={authenticateUser, signupDataValidate, loginDataValidate};