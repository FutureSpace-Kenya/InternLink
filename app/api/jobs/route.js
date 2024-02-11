import Job from '/models/job';
import Department from '/models/department';
import Organization from "/models/organization";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const jobs = await Job.findAll();
        const jobsWithDetails = await Promise.all(jobs.map(async (job) => {
            const department = await Department.findByPk(job.departmentId);
            const organization = await Organization.findByPk(department.organizationId);

            job.dataValues.companyName = organization.name;
            job.dataValues.companyLogo = organization.logo;
            job.dataValues.departmentName = department.name;

            return job;
        }));
        return NextResponse.json({ message: "Fetched all jobs successfully", jobsWithDetails });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching jobs", error });
    }
}