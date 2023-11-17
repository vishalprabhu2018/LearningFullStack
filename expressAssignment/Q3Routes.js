/*
Q.3_Create a Basic Server with Different Routes using Expresl
" `/`G G → send response as {msg:`I am homepage`^
" `/about`G → send response as {msg:`I am about page`^
" `/contact ` → send response as {emai::`suppor#@pwskills.com`}
*/

const express=require('express');
const app=new express();
const PORT=5003;
app.get('/',(req,res)=>{
    res.json({msg:'I am homepage'})
})
app.get('/about',(req,res)=>{
    res.json({msg:'I am about page'})
})
app.get('/contact',(req,res)=>{
    res.json({msg:'I am contact page'})
})

app.listen(PORT,()=>{
    console.log('Server is listening at ', PORT);
})