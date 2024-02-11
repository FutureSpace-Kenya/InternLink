import { NextResponse } from 'next/server';
import Department from '../../../../../../../models/department'

export async function GET(request, { params }) {
    try {
      const { departmentId: id } = params;
  
      // Find the department with the specified ID
      const department = await Department.findByPk(id);
  
      // Check if the department was found
      if (!department) {
        return NextResponse.json({message: "Department not found"})
      }
  
      // Send a successful response with the department data
        return NextResponse.json(department)
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching department", error})
    }
}

export async function PATCH (request, {params}) {
    try {
        const { departmentId: id } = params;

        // Find the department with the specified ID
        const department = await Department.findByPk(id);

        // Check if the department was found
        if (!department) {
            return NextResponse.json({message: "Department not found"})
        }

        // Access the department data from the request body
        const { name, organizationId } = await request.json();

        // Update the department with the new data
        await department.update({
            name,
            organizationId
        });

        // Send a successful response with the updated department data
        return NextResponse.json({message: "Department updated successfully!", department})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error updating department", error})
    }
}

export async function DELETE(request, { params }) {
    try {
        const { departmentId: id } = params;

        // Find the department with the specified ID
        const department = await Department.findByPk(id);

        // Check if the department was found
        if (!department) {
            return NextResponse.json({message: "Department not found"})
        }

        // Delete the department
        await department.destroy();

        // Send a successful response
        return NextResponse.json({message: "Department deleted successfully!"})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error deleting department", error})
    }
}