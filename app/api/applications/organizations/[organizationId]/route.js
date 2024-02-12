import { NextResponse } from 'next/server'
import Applications from "/models/applications"

export async function GET(request, { params }) {
    try {
        const { id } = params;

        // Find the organization with the specified ID
        const applications = await Applications.findAll({
            where: {OrganizationID: id}
        });

        // Check if the organization was found
        if (!applications) {
            return NextResponse.json({message: "Organization does not have any applications"})
        }

        // Send a successful response with the organization data
        return NextResponse.json({message: `Applications for organization ${id} successfully retrieved`})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching applications", error})
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        // Find the organization with the specified ID
        await Applications.destroy({
            where: {OrganizationID: id}
        });

        // Send a successful response
        return NextResponse.json({message: "Applications deleted successfully!"},)
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error deleting applications", error})
    }
}
