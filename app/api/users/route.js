import {NextResponse} from "next/server";
import {User} from "/models/user";

export async function GET(request, {params}) {
    try {
        const users = await User.findAll();
        return NextResponse.json({message: "Fetched users successfully", users});
    }catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching users", error})
    }
}