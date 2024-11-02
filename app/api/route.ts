import { NextResponse } from "next/server";

export async function GET() {
  //This will be executed on the server
  return NextResponse.json({ time: new Date().toLocaleString() });
}
