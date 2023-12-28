import { NextResponse } from 'next/server';
import Department from '../../../../../models/department'
import Organization from '../../../../../models/organization'

export async function GET(request, { params }) {
    try {
      const { id } = params;
  
      // Find the department with the specified ID
      const department = await Department.findByPk(id, {
        include: [Organization] // Eager load the associated organization
      });
  
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
  