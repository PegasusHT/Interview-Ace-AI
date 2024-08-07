import { connectMongoDB } from "../../../_libs/mongodb";
import User from '../../../_models/user';
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}