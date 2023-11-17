const express=require('express');
const app=express();
const authRoute=require('./router/authRoute.js')
const databaseconnect=require('./config/db.js')


databaseconnect();
app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/',(req,res)=>{
    res.status(200).json({data:'JWTAuth server.'})
});


module.exports=app;