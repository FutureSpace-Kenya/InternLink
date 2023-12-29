import { NextResponse } from 'next/server';
import Department from '../../../../../../models/department';

// Next.js API route function for retrieving a single department of a specified organization
export async function GET(request, { params }) {
  try {
    // Extract organizationId and departmentId from the request parameters
    const { organizationId, departmentId } = params;

    // Retrieve the specified department belonging to the specified organization
    const department = await Department.findOne({
      where: { id: parseInt(departmentId, 10), organizationId: parseInt(organizationId, 10) },
    });

    // Check if the department was found
    if (!department) {
      return NextResponse.json({ message: 'Department not found' });
    }

    // Send a successful response with the retrieved department
    return NextResponse.json(department);
  } catch (error) {
    // Log any errors that occur and send an error response
    console.error(error);
    return NextResponse.json({ message: 'Error retrieving department', error });
  }
}


