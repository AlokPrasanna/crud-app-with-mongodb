import mongoose, { Schema } from "mongoose";

const TokenSchema = new Schema({ 
    userId:{
        type:Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique:true
    },
    token:{type:String,required:true},
    createdAt:{type:String, default:Date.now(), expires:3600},// 1 hour
   // timestamps:true
});

const Token = mongoose.models.Token || mongoose.model("Token", TopicSchema);

export default Token;