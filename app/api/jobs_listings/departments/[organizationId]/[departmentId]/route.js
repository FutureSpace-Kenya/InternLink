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

// Next.js API route function for updating a department in the specified organization
export async function PATCH(request, { params }) {
  try {
    // Extract organizationId and departmentId from the request parameters
    const { organizationId, departmentId } = params;

    // Extract updated department data from the request body
    const { name } = await request.json();

    // Retrieve the specified department belonging to the specified organization
    const department = await Department.findOne({
      where: { id: parseInt(departmentId, 10), organizationId: parseInt(organizationId, 10) },
    });

    // Check if the department was found
    if (!department) {
      return NextResponse.json({ message: 'Department not found' });
    }

    // Update the department with the new data
    await department.update({ name });

    // Send a successful response with the updated department data
    return NextResponse.json({ message: 'Department updated successfully!', department });
  } catch (error) {
    // Log any errors that occur and send an error response
    console.error(error);
    return NextResponse.json({ message: 'Error updating department', error });
  }
}

