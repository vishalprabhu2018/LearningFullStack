const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required'],
        trim:true,
        maxLength:[30,'Name must be less than 30 characters']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
    }
})

module.exports=mongoose.model('User',userSchema);