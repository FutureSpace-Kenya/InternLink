"use client"

import React, { useState } from 'react';
import axios from 'axios';

const UpdateJob = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [jobId, setJobId] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleJobIdChange = (e) => {
    setJobId(e.target.value);
  };

  const handleUpdateJob = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments/${departmentId}/jobs/${jobId}`,
        {
          description,
          skills,
          status,
          departmentId,
        }
      );

      setMessage(response.data.message);

      // Reset the form fields after successful job update
        setOrganizationId('');
        setDepartmentId('');
        setJobId('');
        setDescription('');
        setSkills('');
        setStatus('');

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage('Error updating job');

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <form>
      <h5 className="text-green-700">Update Job</h5>
      {/* {message && <p>{message}</p>} */}
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Organization ID"
        value={organizationId}
        onChange={handleOrganizationIdChange}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Department ID"
        value={departmentId}
        onChange={handleDepartmentIdChange}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Job ID"
        value={jobId}
        onChange={handleJobIdChange}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      {message && (
        <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <button
        className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
        type="button"
        onClick={handleUpdateJob}
      >
        Update Job
      </button>
    </form>
  );
};

export default UpdateJob;
