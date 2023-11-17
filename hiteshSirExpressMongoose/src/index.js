import app from './app.js'
import mongoose from 'mongoose'
const port=3000;

//database connection mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/test');
(async ()=>{
    try {
      await mongoose.connect('dbstring')
      console.log('database connected sucessfully');

      app.on('error',(err)=>{
        console.log('error:',err);
        throw err;
      })
        
      app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
      })
    } catch (error) {
        console.error('Error',error);
        throw err;
        
    }
})



app.listen(port,()=>{
    console.log('server is listening at', port);
})