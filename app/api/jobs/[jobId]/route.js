import {NextResponse} from 'next/server'
import Job from '/models/job';
import Department from "/models/department";
import Organization from "/models/organization";

export async function GET(request, { params }) {
    try {
        const { jobId: id } = params;

        // Find the job with the specified ID
        const job = await Job.findByPk(id);

        // Check if the job was found
        if (!job) {
            return NextResponse.json({message: "Job not found"})
        }

        // get the department details
        const departmentId = job.departmentId;
        const department = await Department.findByPk(departmentId);

        // Check if the department was found
        if (!department) {
            return NextResponse.json({message: "Department not found"})
        }
        const jobData = job.toJSON();
        jobData.department = department.toJSON();

        //get the organization details
        const organizationId = department.organizationId;
        const organization = await Organization.findByPk(organizationId);

        // Check if the organization was found
        if (!organization) {
            return NextResponse.json({message: "Organization not found"})
        }

        jobData.department.organization = organization.toJSON();

        return NextResponse.json({message: "Fetched job successfully", jobData});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching job", error})
    }
}