"use client"

import React, { useState } from 'react';
import axios from 'axios';

const UpdateOrganization = () => {
  const initialFormData = {
    name: '',
    location: '',
    contact: '',
  };

  const [organizationId, setOrganizationId] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
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
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}`,
        formData
      );

      setMessage(response.data.message);

      // Reset the form fields after successful organization update
      setOrganizationId('');
      setFormData(initialFormData);

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error updating organization:', error);
      setMessage('Error updating organization');

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-green-700">Update Organization</h5>
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
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Contact"
        name="contact"
        value={formData.contact}
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
        Update Organization
      </button>
    </form>
  );
};

export default UpdateOrganization;
