import ConnectMongoDB from "@/Libraries/MongoDB";
import Topic from "@/Models/Topic";
import { NextResponse } from "next/server";

export async function POST(res){
    const {title, description} = await res.json();
    console.log("Call Post method")
    console.log(title);
    console.log(description);
    await ConnectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message: "Topic Created!"}, {status:201});

}

export async function GET() {
    await ConnectMongoDB();
    const Topics = await Topic.find();
    return NextResponse.json(Topics);
}

export async function DELETE(res){
    const  id = res.nextUrl.searchParams.get("id");
    await ConnectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic Deleted!"}, {status:200});
}

