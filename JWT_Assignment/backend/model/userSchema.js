const mongoose=require('mongoose');
require('dotenv').config();
const JWT=require('jsonwebtoken');
const {Schema}=mongoose;
const bcrypt=require('bcrypt')

const userSchema=new Schema(
{
    name:{
        type:String,
        required:[true,'Name is required'],
        minLength:[6,'Name should be greater than 6 characters'],
        maxLength:[30,'Name should not be greater than 30 characters'],
        trim:true
    },
    username:{
        type:String,
        required:[true,'UserName is required'],
        minLength:[2,'Name should be greater than 6 cahracters'],
        maxLength:[30,'Name should not be greater than 30 characters'],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        select:false,
        
    },
    bio:{
        type:String,
        minLength:[6,'Name should be greater than 6 characters'],
        maxLength:[150,'bio should be less than 150 characters'],
        
    }

},{ timestamps: true }

    )
  
    userSchema.pre('save',async function (next){
        if(!this.isModified('password')) return next();
        this.password=await bcrypt.hash(this.password, 10);
        return next();
    })




    userSchema.methods={
        jwtToken(){
            return JWT.sign(
                {id:this._id, username:this.username},
                process.env.SECRET,
                {expiresIn:'24h'}
            );
        }
          
    }


    
    
    
    const userModel=mongoose.model('User',userSchema);
    module.exports=userModel;