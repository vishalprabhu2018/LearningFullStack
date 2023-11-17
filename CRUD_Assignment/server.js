require('dotenv').config();
const app=require('./app.js')


let PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log('listened at  port no ',PORT)
})