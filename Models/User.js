import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
    {
      firstName: {type:String, require:true},
      lastName: {type:String, require:true},
      email: {type:String, require:true},
      password: {type:String, require:true},
      verified:{default:false}

    },{
        timestamps:true
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;