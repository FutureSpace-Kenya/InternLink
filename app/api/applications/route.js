import { NextResponse } from 'next/server';
import Applications from '/models/applications';

export async function POST(request) {
    try {
        // Access the application data from the request body
        const { UserID,OrganizationID,JobID } = await request.json();

        // Create a new instance of the application model
        const application = await Applications.create({
            UserID,
            OrganizationID,
            JobID
        });

        // Send a successful response with the created application data
        return NextResponse.json({message: "application created successfully!", application})
    } catch (error) {
        // Handle any errors that may occur during the creation process
        console.error(error);
        return NextResponse.json({message: "Error creating application"})
    }
}

export async function GET () {
    try {
        // Fetch all applications from the database
        const applications = await Applications.findAll();

        // Send a successful response with the applications data
        return NextResponse.json({message: "Fetched all applications successfully",data:applications})
    } catch (error) {
        // Handle any errors that may occur during the fetch process
        console.error(error);
        return NextResponse.json({message: "Error fetching applications", error})
    }
}

export async function DELETE (request) {
    try {
        // Delete all applications from the database
        await Applications.destroy({
            where: {},
            truncate: true
        });

        // Send a successful response
        return NextResponse.json({message: "Deleted all applications successfully"})
    } catch (error) {
        // Handle any errors that may occur during the delete process
        console.error(error);
        return NextResponse.json({message: "Error deleting applications", error})
    }
}