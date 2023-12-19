import {NextResponse} from "next/server";
import * as request from "sequelize";

export async function GET() {
    return NextResponse.json({message: 'Hello from Next.js!'})
}

export async function POST() {
    let body = await request.json()
}