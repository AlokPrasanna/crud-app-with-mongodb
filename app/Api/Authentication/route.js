import ConnectMongoDB from "@/Libraries/MongoDB";
import User from "@/Models/User";
import Token from "@/Models/Token";
import SendEmails from "@/Utils/SendEmails";
import crypto from "crypto";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("call post function");
    const { firstName, lastName, email, password, verified } = await req.json();

    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)
    console.log(verified)
    
    // Check if the request body is a valid JSON string
    // let body;
    // try {
    //   body = res.json();
    // } catch (error) {
    //   console.error("Error parsing request body:", error);
    //   return NextResponse.json({ message: "Invalid JSON in request body", status: 400 });
    // }


    await ConnectMongoDB();

    if (!firstName || !lastName || !email || !password || !verified) {
      return NextResponse.json({ message: "Missing required fields", status: 400 });
    }

    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User with given email already exists!", status: 409 });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);

    user = await new User({ firstName, lastName, email, password: hashPassword, verified }).save();

    const token = await new Token({ 
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}/api/verify-email?userId=${user._id}&token=${token.token}`;
    console.log(url);
    await SendEmails(user.email, "Verify Email", url);

    return NextResponse.json({ message: "An email has been sent to your account. Please verify.", status: 201 });
  } catch (error) {
    console.error("Error in user registration:", error);
    return NextResponse.json({ message: "Internal Server Error: " + error.message, status: 500 });
  }
}

export async function GET(req) {
  try {
    const { userId, token } = req.query;

    await ConnectMongoDB();

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "Invalid user ID", status: 400 });
    }

    const tokenObj = await Token.findOne({ userId, token });
    if (!tokenObj) {
      return NextResponse.json({ message: "Invalid or expired token", status: 400 });
    }

    await User.findByIdAndUpdate(userId, { verified: true });
    await tokenObj.remove();

    return NextResponse.json({ message: "Email verified successfully", status: 200 });
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json({ message: "Internal Server Error: " + error.message, status: 500 });
  }
}
