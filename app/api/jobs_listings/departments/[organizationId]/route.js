// Import necessary dependencies and models
import { NextResponse } from 'next/server';
import Department from '../../../../../models/department';

// Next.js API route function for creating a department in the specified organization
export async function POST(request, { params }) {
  try {
    // Extract organizationId from the request parameters
    const { organizationId } = params;

    // Extract department data from the request body
    const { name } = await request.json();

    // Ensure organizationId is provided
    if (!organizationId) {
      return NextResponse.json({ message: 'Organization ID is required' });
    }

    // Create a new instance of the Department model
    const department = await Department.create({
      name,
      organizationId: parseInt(organizationId, 10),
    });

    // Send a successful response with the created department data
    return NextResponse.json({ message: 'Department created successfully!', department });
  } catch (error) {
    // Log any errors that occur and send an error response
    console.error(error);
    return NextResponse.json({ message: 'Error creating department', error });
  }
}

// Next.js API route function for retrieving all departments of a specified organization
export async function GET(request, { params }) {
    try {
      // Extract organizationId from the request parameters
      const { organizationId } = params;
  
      // Retrieve all departments belonging to the specified organization
      const departments = await Department.findAll({
        where: { organizationId: parseInt(organizationId, 10) },
      });
  
      // Send a successful response with the retrieved departments
      return NextResponse.json(departments);
    } catch (error) {
      // Log any errors that occur and send an error response
      console.error(error);
      return NextResponse.json({ message: 'Error retrieving departments', error });
    }
}

// Next.js API route function for deleting all departments in the specified organization
export async function DELETE(request, { params }) {
  try {
    // Extract organizationId from the request parameters
    const { organizationId } = params;

    // Delete all departments belonging to the specified organization
    const deletedRows = await Department.destroy({
      where: { organizationId: parseInt(organizationId, 10) },
    });

    // Check if any rows were deleted
    if (deletedRows === 0) {
      return NextResponse.json({ message: 'No departments found for the organization' });
    }

    // Send a successful response indicating the deletion
    return NextResponse.json({ message: 'All departments deleted successfully!' });
  } catch (error) {
    // Log any errors that occur and send an error response
    console.error(error);
    return NextResponse.json({ message: 'Error deleting departments', error });
  }
}

