"use client"

import React, { useState } from 'react';
import axios from 'axios';

const GetJob = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [jobId, setJobId] = useState('');
  const [job, setJob] = useState(null);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleJobIdChange = (e) => {
    setJobId(e.target.value);
  };

  const fetchJob = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments/${departmentId}/jobs/${jobId}`
      );

      setJob(response.data);

      setOrganizationId('')
      setDepartmentId('')
      setJobId('')
      setMessage(''); // Clear message on successful fetch

      setShowModal(true); // Display modal
    } catch (error) {
      console.error(error);
      setJob(null);
      setShowModal(false); // Hide modal on error
      setMessage('Error fetching job');
    }
  };

  const handleFetchJob = () => {
    fetchJob();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form>
        <h5 className="text-green-700">Fetch Job</h5>
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
        <button 
          className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white" 
          type="button" 
          onClick={handleFetchJob}
        >
          Fetch Job
        </button>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </form>

      {showModal && job && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h5 className="text-green-700">Job Details</h5>
            <p>Description: {job.description}</p>
            <p>Skills: {job.skills}</p>
            <p>Status: {job.status}</p>
            {/* Additional details if needed */}
            <button 
              className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetJob;
