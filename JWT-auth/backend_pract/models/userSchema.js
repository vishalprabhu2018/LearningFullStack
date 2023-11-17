const mongoose=require('mongoose');
const {Schema}=mongoose;
const JWT = require('jsonwebtoken');

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'username is required'],
        minLength:[5,'Name must be atleast 5 character'],
        maxLength:[50,'Name must be less than 50 character'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
    },
    forgotPasswordToken:{
        type:String,
    },
    forgotPasswordExpiryDate:{
        type:Date,
    }
},
{timestamps:true}
)

userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id:this._id, email:this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}



const userModel=mongoose.model('user',userSchema);

module.exports=userModel;
