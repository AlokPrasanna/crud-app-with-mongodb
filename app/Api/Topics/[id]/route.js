import ConnectMongoDB from "@/Libraries/MongoDB";
import Topic from "@/Models/Topic";
import { NextResponse } from "next/server";

export async function PUT(res, {params}){
    const {id} = params;
    const {newTitle:title, newDescription:description} = await res.json();
    await ConnectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({Message: "Topic Updated!"}, {status:200});
}

export async function GET(res, {params}) {
    const {id} = params;
    await ConnectMongoDB();
    const Topics = await Topic.findOne({_id:id});
    return NextResponse.json(Topics, {status:200});
}