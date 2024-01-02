import { NextResponse } from 'next/server'
import Applications from "../../../../../../models/applications"

export async function GET(request, { params }) {
    try {
        // Request format "/api/applications/organizations/organizationId={}&applicationId={}"
        const { userId, applicationId } = params;

        // Find the organization with the specified ID
        const applications = await Applications.findAll({
            where: {UserID: userId, ApplicationID:applicationId}
        });

        // Check if the organization was found
        if (!applications) {
            return NextResponse.json({message: "User does not have applications"})
        }

        // Send a successful response with the organization data
        return NextResponse.json({message: `Applications for user ${userId} successfully deleted`})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching applications", error})
    }
}

export async function PATCH (request, {params}) {
    try {
        const { userId, applicationId } = params;


        // Access the organization data from the request body
        const { ResumeLink, CoverLetter } = await request.json();

        // Find the organization with the specified ID
        await Applications.update({ResumeLink, CoverLetter},{
            where: {UserID: userId, ApplicationID:applicationId}
        });

        // Send a successful response with the updated organization data
        return NextResponse.json({message: "Application updated successfully!"})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error updating application", error})
    }
}

export async function DELETE(request, { params }) {
    try {
        const { userId, applicationId } = params;

        // Find the organization with the specified ID
        await Applications.destroy({
            where: {UserID: organizationId, ApplicationID:applicationId}
        });

        // Send a successful response
        return NextResponse.json({message: "Application deleted successfully!"},)
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error deleting application", error})
    }
}
