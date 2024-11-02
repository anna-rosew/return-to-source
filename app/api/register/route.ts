import { NextResponse } from "next/server";

import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  await dbConnect();

  const body = await req.json();
  const { name, email, password } = body;

  try {
    const user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();

    console.log("user created =>", user);
    return NextResponse.json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      console.log("An unknown error occurred");
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
