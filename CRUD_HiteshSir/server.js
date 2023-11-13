require('dotenv').config();
const app=require('./app.js');

let port=process.env.PORT||4000;


app.listen(port,()=>{
    console.log('server is listening at',port);
})

