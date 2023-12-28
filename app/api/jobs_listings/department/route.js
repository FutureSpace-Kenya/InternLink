import { NextResponse } from 'next/server';
import Department from '../../../../models/department'

export async function POST(request) {
    try {
      // Get department data from the request body
      const { name, organizationId } = await request.json();
  
      // Ensure organizationId is provided
      if (!organizationId) {
        return NextResponse.json({message: "Organization ID is required"})
      }
  
      // Create a new instance of the Department model
      const department = await Department.create({
        name,
        organizationId
      });
  
      // Send a successful response with the created department data
      return NextResponse.json({message: "Department created successfully!", department})
    } catch (error) {
      // Log any errors that occur and send an error response
      console.error(error);
      return NextResponse.json({message: "Error creating department", error})
    }
}

export async function GET () {
    try {
        // Fetch all departments from the database
        const departments = await Department.findAll();

        // Send a successful response with the departments data
        return NextResponse.json({message: "Fetched all departments successfully",departments})
    } catch (error) {
        // Handle any errors that may occur during the fetch process
        console.error(error);
        return NextResponse.json({message: "Error fetching departments", error})
    }
}

export async function DELETE (request) {
    try {
        // Delete all departments from the database
        await Department.destroy({
            where: {},
            truncate: true
        });

        // Send a successful response
        return NextResponse.json({message: "Deleted all departments successfully"})
    } catch (error) {
        // Handle any errors that may occur during the delete process
        console.error(error);
        return NextResponse.json({message: "Error deleting departments", error})
    }
}