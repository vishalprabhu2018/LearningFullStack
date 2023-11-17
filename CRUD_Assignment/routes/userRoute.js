const express=require('express');
const router=   express.Router();


const {first}=require('../controller/userController.js');



router.get('/',first);


module.exports=router;