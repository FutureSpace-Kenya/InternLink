"use client"

import React, { useState } from 'react';
import axios from 'axios';

const DeleteOrganization = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [message, setMessage] = useState('');

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}`
      );

      setMessage(response.data.message);

      // Clear the input field after successful deletion
      setOrganizationId('');

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error deleting organization:', error);
      setMessage('Error deleting organization');

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <h5 className="text-green-700">Delete Organization</h5>
      {/* {message && <p>{message}</p>} */}
      <input
        className="input input-bordered w-full max-w-xs mb-2"
        type="text"
        placeholder="Organization ID"
        value={organizationId}
        onChange={handleOrganizationIdChange}
      />
      {message && (
        <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <button
        className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
        type="button"
        onClick={handleDelete}
      >
        Delete Organization
      </button>
    </form>
  );
};

export default DeleteOrganization;
