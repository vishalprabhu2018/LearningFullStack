const express=require('express');
const authRouter=require('./router/authRoute');
require('dotenv').config();
const databaseConnect=require('./config/db')
const app=express();
const  cors=require('cors');
const cookieParser=require('cookie-parser');


app.use(express.json());
app.use(cors({
origin: 'http://127.0.0.1:5500',
credentials:true,

}));
app.use(cookieParser());

//database connection 
databaseConnect();

app.use('/',authRouter);



module.exports=app;