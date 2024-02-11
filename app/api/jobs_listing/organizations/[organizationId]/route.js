import { NextResponse } from 'next/server'
import Organization from '../../../../../models/organization';

export async function GET(request, { params }) {
    try {
        const { organizationId: id } = params;

        // Find the organization with the specified ID
        const organization = await Organization.findByPk(id);

        // Check if the organization was found
        if (!organization) {
            return NextResponse.json({message: "Organization not found"})
        }

        // Send a successful response with the organization data
        return NextResponse.json(organization)
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching organization", error})
    }
}

export async function PATCH (request, {params}) {
    try {
        const { organizationId: id } = params;

        // Find the organization with the specified ID
        const organization = await Organization.findByPk(id);

        // Check if the organization was found
        if (!organization) {
            return NextResponse.json({message: "Organization not found"})
        }

        // Access the organization data from the request body
        const { name, location, contact } = await request.json();

        // Update the organization with the new data
        await organization.update({
            name,
            location,
            contact
        });

        // Send a successful response with the updated organization data
        return NextResponse.json({message: "Organization updated successfully!", organization})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error updating organization", error})
    }
}

export async function DELETE(request, { params }) {
    try {
        const { organizationId: id } = params;

        // Find the organization with the specified ID
        const organization = await Organization.findByPk(id);

        // Check if the organization was found
        if (!organization) {
        return NextResponse.json({message: "Organization not found"})
        }

        // Delete the organization
        await organization.destroy();

        // Send a successful response
        return NextResponse.json({message: "Organization deleted successfully!"})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error deleting organization", error})
    }
}
  