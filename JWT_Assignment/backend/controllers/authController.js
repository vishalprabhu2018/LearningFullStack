const emailValidator = require("email-validator");
const userModel = require("../model/userSchema");
const { trusted } = require("mongoose");
const first = (req, res) => {
  res.send("hello world");
};

const signUp = async (req, res) => {
  const { name, username, email, password, bio } = req.body;
  /// every field is required
  if (!name || !username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  //validate email using npm package "email-validator"
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address 📩",
    });
  }

  try {
    const userInfo = new userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    /// send the message of the email and  username is not unique

    if (error.code === 11000) {
      // Duplicate key error
      if (error.keyPattern.email) {
        // Duplicate email error
        return res
          .status(400)
          .json({
            error: `Account already exist with the provided email ${email}`,
          });
      } else if (error.keyPattern.username) {
        // Duplicate username error
        return res
          .status(400)
          .json({
            error: `Account already exist with the provided username ${username}`,
          });
      } else {
        // Other duplicate key error, handle accordingly
        return res.status(400).json({ error: "Duplicate key violation." });
      }
    } else {
      // Other errors
      return res.status(500).json({ error: "Internal Server Error" });
    }

  }

};

const login=async (req,res)=>{
    const {username,password}=req.body;

    if(!username || !password){
      return res.status(400).json({
        success:false,
        message:'Every field is required'
      })
    }

    try {
      //check user exist or not

      const user= await userModel
      .findOne({
        username
      })
      .select('+password')


      if(!user || !user.password){
        return res.status(400).json({
          success:false,
          message:'Invalid credentials' })
      }
      
      const  token=user.jwtToken();
      user.password=undefined;
  
      const cookieOption={
        maxAge:24*60*60*1000,
        httpOnly:true
      };
  
      res.cookie('token',token,cookieOption);
      return res.status(200).json({
        success:true,
        data:user
      })


    } catch (error) {
       
      return res.status(400).json({
        success:false,
        message:error.message
      })
    }

   
}

module.exports = { first, signUp, login };
