const express=require('express');
const authRouter=require('./router/authRoute');
const databaseConnect=require('./config/db')
const app=express();
const  cors=require('cors');
const cookieParser=require('cookie-parser');


app.use(express.json());
app.use(cors());
app.use(cookieParser());

//database connection 
databaseConnect();

app.use('/',authRouter);



module.exports=app;