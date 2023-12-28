import { NextResponse } from 'next/server';
import Job from '../../../../../models/job';

export async function GET(request, { params }) {
    try {
      const { id } = params;
  
      // Find the job with the specified ID
      const job = await Job.findByPk(id, {
        include: [Department] // Eager load the associated department
      });
  
      // Check if the job was found
      if (!job) {
        return NextResponse.json({message: "Job not found"})
      }
  
      // Send a successful response with the job data
      return NextResponse.json(job)
    } catch (error) {
      console.error(error);
        return NextResponse.json({message: "Error fetching job", error})
    }
}

export async function PATCH (request, { params }) {
    try {
      const { id } = params;
  
      // Find the job with the specified ID
      const job = await Job.findByPk(id);
  
      // Check if the job was found
      if (!job) {
        return NextResponse.json({message: "Job not found"})
      }
  
      // Get job data from the request body
      const { description, skills, status, departmentId } = await request.json();
  
      // Update the job with the new data
      await job.update({
        description,
        skills,
        status,
        departmentId
      });
  
      // Send a successful response with the updated job data
      return NextResponse.json({message: "Job updated successfully!", job})
    } catch (error) {
      console.error(error);
        return NextResponse.json({message: "Error updating job", error})
    }
}

// export async function DELETE (request, { params }) {
//     try {
//       const { id } = params;
  
//       // Find the job with the specified ID
//       const job = await Job.findByPk(id);
  
//       // Check if the job was found
//       if (!job) {
//         return NextResponse.json({message: "Job not found"})
//       }
  
//       // Delete the job
//       await job.destroy();
  
//       // Send a successful response
//       return NextResponse.json({message: "Job deleted successfully!"})
//     } catch (error) {
//       console.error(error);
//         return NextResponse.json({message: "Error deleting job", error})
//     }
// }