"use client"

import React, { useState } from 'react';
import axios from 'axios';

const CreateDepartmentForm = () => {
  const [name, setName] = useState('');
  const [organizationId, setOrganizationId] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateDepartment = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments`,
        {
          name,
          organizationId,
        }
      );

      setMessage(response.data.message);

      // Clear the input fields after successful department creation
      setName('');
      setOrganizationId('');

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage('Error creating department');

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <form>
      <h5 className="text-green-700">Create Department</h5>
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Organization ID"
        value={organizationId}
        onChange={(e) => setOrganizationId(e.target.value)}
      />
      {message && (
        <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <button
        className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
        type="button"
        onClick={handleCreateDepartment}
      >
        Create Department
      </button>
    </form>
  );
};

export default CreateDepartmentForm;
