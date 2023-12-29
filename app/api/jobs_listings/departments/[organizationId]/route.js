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
