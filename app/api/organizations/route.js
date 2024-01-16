import Organization from "/models/organization";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const organizations = await Organization.findAll();
        return NextResponse.json({message: "Fetched all organizations successfully", organizations})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching organizations", error})
    }
}