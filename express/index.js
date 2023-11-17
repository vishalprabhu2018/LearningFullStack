const express=require('express');

const app=express();

const PORT=4010;

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})
app.get('/about',(req,res)=>{
    res.send('About page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact page')
})


app.listen(PORT,()=>{
    console.log(`Server running at ${ PORT}`)
})