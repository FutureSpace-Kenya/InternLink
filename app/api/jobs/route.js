import Job from '/models/job';
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const jobs = await Job.findAll();
        return NextResponse.json({ message: "Fetched all jobs successfully", jobs });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching jobs", error });
    }
}