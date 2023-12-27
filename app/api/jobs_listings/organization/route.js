import { NextResponse } from 'next/server';
import Organization from '../../../../models/organization';

export async function POST(request) {
    try {
      // Access the organization data from the request body
      const { name, location, contact } = await request.json();
  
      // Create a new instance of the Organization model
      const organization = await Organization.create({
        name,
        location,
        contact
      });
  
      // Send a successful response with the created organization data
      return NextResponse.json({message: "Organization created successfully!", organization})
    } catch (error) {
      // Handle any errors that may occur during the creation process
      console.error(error);
      return NextResponse.json({message: "Error creating organization"})
    }
  }
  