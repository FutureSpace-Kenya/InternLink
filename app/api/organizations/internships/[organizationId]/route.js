import { NextResponse } from 'next/server'
import Organization from '/models/organization';
import Department from '/models/department';
import Job from '/models/job';

export async function GET(request, { params }) {
    try {
        const { organizationId: id } = params;

        // Find the organization with the specified ID
        const organization = await Organization.findByPk(id);

        // Check if the organization was found
        if (!organization) {
            return NextResponse.json({message: "Organization not found"})
        }

        //get all jobs
        const departments = await Department.findAll({
            where: {
                organizationId: id
            }
        });

        //get jobs for each department
        let jobs = [];

        for (let i = 0; i < departments.length; i++) {
            let department = departments[i];
            let departmentJobs = await Job.findAll({
                where: {
                    departmentId: department.id
                }
            });
            jobs = jobs.concat(departmentJobs);
        }

        console.log(jobs)


        // Convert the organization instance into a plain object
        const organizationData = organization.toJSON();

        // Add departments to organization as a property
        organizationData.departments = departments;
        organizationData.jobs = jobs;

        return NextResponse.json({message: "Fetched organization successfully", organization: organizationData});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching organization", error})
    }
}