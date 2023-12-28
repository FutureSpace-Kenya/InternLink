import { NextResponse } from 'next/server';
import Job from '../../../../models/job'

export async function POST (request) {
    try {
      // Get job data from the request body
      const { description, skills, status, departmentId } = await request.json();
  
      // Ensure departmentId is provided
      if (!departmentId) {
        return NextResponse.json({message: 'Department ID is required'})
      }
  
      // Create a new instance of the Job model
      const job = await Job.create({
        description,
        skills,
        status,
        departmentId
      });
  
      // Send a successful response with the created job data
        return NextResponse.json({message: "Job created successfully!", job})
    } catch (error) {
      // Log any errors that occur and send an error response
      console.error(error);
        return NextResponse.json({message: "Error creating job"})
    }
}

export async function GET () {
    try {
        // Fetch all jobs from the database
        const jobs = await Job.findAll();
  
        // Send a successful response with the jobs data
        return NextResponse.json({message: "Fetched all jobs successfully",jobs})
    } catch (error) {
        // Handle any errors that may occur during the fetch process
        console.error(error);
        return NextResponse.json({message: "Error fetching jobs", error})
    }
}

export async function DELETE (request) {
    try {
        // Delete all jobs from the database
        await Job.destroy({
            where: {},
            truncate: true
        });
  
        // Send a successful response
        return NextResponse.json({message: "Deleted all jobs successfully"})
    } catch (error) {
        // Handle any errors that may occur during the delete process
        console.error(error);
        return NextResponse.json({message: "Error deleting jobs", error})
    }
}