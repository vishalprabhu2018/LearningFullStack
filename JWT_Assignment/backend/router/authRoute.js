const express=require('express');
const router=express.Router();
const {signUp, login,getUser}=require('../controllers/authController')
const {authenticateUser,signupDataValidate,loginDataValidate}=require('../midddleware/userAuth');

router.post('/signup',signupDataValidate,signUp);
router.post('/login',loginDataValidate,login);
router.get('/',authenticateUser,getUser)

module.exports=router;