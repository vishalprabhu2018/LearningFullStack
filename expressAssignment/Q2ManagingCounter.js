/*
Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
" ‘/’G →G send counter data as {counter:counter}
" `/increment` → increment counter by 1 and send in response :atest data as {counter:counter}
" `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}

*/

const express=require('express');

const PORT=5002;
const app=new express();
let counter=0;
app.get('/',(req,res)=>{
    res.json({counter})
})
app.get('/increment',(req,res)=>{
    counter+=1;
    res.json({counter})
})
app.get('/decrement',(req,res)=>{
    counter-=1;
    res.json({counter})
})


app.listen(PORT,()=>{
    console.log('Server is listening at ', PORT)
})