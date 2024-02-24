import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        firstName: String ,
        lastName: String,
        email: String,
        password: String,
        verified: Boolean
    }, 
    { 
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;