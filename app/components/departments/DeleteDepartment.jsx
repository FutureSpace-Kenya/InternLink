"use client"

import React, { useState } from 'react';
import axios from 'axios';

const DeleteDepartment = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [message, setMessage] = useState('');

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleDeleteDepartment = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments/${departmentId}`
      );

      setMessage(response.data.message);

      // clear input fields
      setOrganizationId('');
      setDepartmentId('');

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error(error);
      setMessage('Error deleting department');

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <form>
      <h5 className="text-green-700">Delete Department</h5>
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
      {message && (
        <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <button
        className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
        type="button"
        onClick={handleDeleteDepartment}
      >
        Delete Department
      </button>
    </form>
  );
};

export default DeleteDepartment;
