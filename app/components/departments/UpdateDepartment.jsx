"use client"

import React, { useState } from 'react';
import axios from 'axios';

const UpdateDepartment = () => {
  const initialFormData = {
    name: '',
    organizationId: '',
  };

  const [departmentId, setDepartmentId] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/jobs_listing/organizations/${formData.organizationId}/departments/${departmentId}`,
        formData
      );

      setMessage(response.data.message);

      // Reset the form fields after successful department update
      setDepartmentId('');
      setFormData(initialFormData);

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating department:', error);
      setMessage('Error updating department');

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-green-700">Update Department</h5>
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
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Organization ID"
        name="organizationId"
        value={formData.organizationId}
        onChange={handleChange}
      />
      {message && (
        <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <button
        className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
        type="button"
        onClick={handleSubmit}
      >
        Update Department
      </button>
    </form>
  );
};

export default UpdateDepartment;
