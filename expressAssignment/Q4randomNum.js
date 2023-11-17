/*
Q.4 Build a Server that Generate! Random Number U!ing Epre!
 ‘/random’ → !end random number in re!pon!e {random:10}
*/

const express=require('express');
const app=new express();
const PORT=5004;

app.get('/',(req,res)=>{
    res.send('random num generator')
})
app.get('/random',(req,res)=>{
    let randomNum=Math.floor(Math.random()*100);
    res.json({'random':randomNum});
})

app.listen(PORT,(req,res)=>{
    console.log('server is listening at port', PORT);
})
