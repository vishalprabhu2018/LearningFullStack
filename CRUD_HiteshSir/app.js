const express=require('express');
const connectToDb=require('./config/db.js');
const cors=require('cors');
const userRoutes=require('./routes/userRoutes.js')
    
const app=express();

//Express Middleware  (appki request sai pahilai execute hota hai)(agar mai request kai sath kuch data bhi bhejna chata hu as a checkpoint hota hai)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());




//init connection to db
connectToDb();  

app.use('/',userRoutes);


module.exports=app;