import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/instagram',(req,res)=>{
    res.send('Hello welcome to instagram')
})

export default app;