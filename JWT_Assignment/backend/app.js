const express=require('express');
const authRouter=require('./router/authRoute');
const databaseConnect=require('./config/db')
const app=express();
const  cors=require('cors');


app.use(express.json());
app.use(cors());

//database connection 
databaseConnect();

app.use('/',authRouter);



module.exports=app;