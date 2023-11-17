const express=require('express');
const app=express();
const router=require('./routes/userRoute.js');
const connectToDB=require('./config/db.js')


//Middlewear

app.use('/',router);

//database init
connectToDB();

module.exports=app;