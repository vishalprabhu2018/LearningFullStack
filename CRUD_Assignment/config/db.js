require('dotenv').config();
const mongoose=require('mongoose');

const connectToDB=async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
          console.log('Connected to database',conn.connection.host)
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1)

    })
}

module.exports=connectToDB;