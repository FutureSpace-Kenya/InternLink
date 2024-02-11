"use client"

import React, { useState } from 'react';
import axios from 'axios';

const JobsList = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState('');

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments/${departmentId}/jobs`
      );

      setJobs(response.data.jobs);
      setOrganizationId(''); // clear organization id
      setDepartmentId(''); // clear department id
      setMessage(''); // Clear message on successful fetch
    } catch (error) {
      console.error(error);
      setJobs([]); // Clear jobs on error
      setMessage('Error fetching jobs');
    }
  };

  const handleFetchJobs = () => {
    fetchJobs();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h5 className="text-green-700 pt-2">Jobs</h5>
      <div className="flex flex-row justify-center items-center gap-4">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Organization ID"
          value={organizationId}
          onChange={handleOrganizationIdChange}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Department ID"
          value={departmentId}
          onChange={handleDepartmentIdChange}
        />
        <button
          className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
          type="button"
          onClick={handleFetchJobs}
        >
          Fetch Jobs
        </button>
      </div>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      {jobs.length > 0 && (
        <table className="border border-gray-500">
          <thead className="bg-green-600 text-black">
            <tr>
              <th className="px-8 py-1">ID</th>
              <th className="px-8 py-1">Description</th>
              <th className="px-8 py-1">Skills</th>
              <th className="px-8 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="px-8 py-1">{job.id}</td>
                <td className="px-8 py-1">{job.description}</td>
                <td className="px-8 py-1">{job.skills}</td>
                <td className="px-8 py-1">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobsList;

// Backend
export async function GET(request, { params }) {
  try {
    const { organizationId, departmentId } = params;

    // Fetch all jobs from the database based on the provided organizationId and departmentId
    const jobs = await Job.findAll({
      where: {
        organizationId: organizationId,
        departmentId: departmentId,
      },
    });

    // Send a successful response with the jobs data
    return NextResponse.json({
      message: "Fetched all jobs successfully",
      jobs,
    });
  } catch (error) {
    // Handle any errors that may occur during the fetch process
    console.error(error);
    return NextResponse.json({ message: "Error fetching jobs", error });
  }
}
