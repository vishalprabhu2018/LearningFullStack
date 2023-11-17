const express=require('express');
const router=express.Router();
const {signup,signin,getUser}=require('../controllers/authController.js')

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/user',getUser);

module.exports=router;