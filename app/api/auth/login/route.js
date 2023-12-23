import {NextResponse} from "next/server";

export async function POST(Request){
    try {
        const body = await Request.json();
        const{ email, password } = body;
        if(!email || !password){
            return NextResponse.json({error: 'Missing required fields in request body'});
        }
        console.log(body);
    }catch (error){
        console.error(error);
    }
    return NextResponse.json({message: 'Hello from Next.js!'});
}