import { NextResponse } from 'next/server'
import Applications from "../../../../../models/applications"

export async function GET(request, { params }) {
    try {
        const { id } = params;

        // Find the organization with the specified ID
        const applications = await Applications.findAll({
            where:{UserID:id}
        });

        // Check if the organization was found
        if (!applications) {
            return NextResponse.json({message: "User has no applications"})
        }

        // Send a successful response with the organization data
        return NextResponse.json(applications)
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching user applications", error})
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        // Find the organization with the specified ID
        const applications = await Applications.findAll({
            where:{UserID:id}
        });

        // Check if the organization was found
        if (!applications) {
            return NextResponse.json({message: "User does not have active applications"})
        }

        // Delete the organization
        await Applications.destroy({
            where:{UserID:id}
        });

        // Send a successful response
        return NextResponse.json({message: "Applications deleted successfully!"})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error deleting organization", error})
    }
}
