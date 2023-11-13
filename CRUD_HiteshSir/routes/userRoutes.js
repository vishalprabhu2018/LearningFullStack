const express=require('express');

const {home, createUser,getUsers,deleteUser}=require('../controller/userController.js');


const router=express.Router();
router.get('/',home);
router.post('/createuser', createUser);
router.get('/getusers',getUsers);
router.delete('/deleteuser/:id',deleteUser)


module.exports=router

