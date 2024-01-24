"use client"

import React, { useState } from 'react';
import axios from 'axios';

const CreateOrganization = () => {
  const initialOrganizationData = {
    name: '',
    location: '',
    contact: '',
  };

  const [organizationData, setOrganizationData] = useState(initialOrganizationData);
  const [creationStatus, setCreationStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrganizationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateOrganization = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/jobs_listing/organizations', organizationData);
      console.log(response.data);

      // Clear the fields after successfully creating the organization
      setOrganizationData(initialOrganizationData);
      setCreationStatus({ status: 'success', message: response.data.message });

      // Automatically clear the message after 3 seconds
      setTimeout(() => {
        setCreationStatus(null);
      }, 3000);
    } catch (error) {
      console.error('Error creating organization:', error);
      setCreationStatus({ status: 'error', message: 'Error creating organization' });

      // Automatically clear the error message after 3 seconds
      setTimeout(() => {
        setCreationStatus(null);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleCreateOrganization}>
      <h5 className="text-green-700">Create Organization</h5>
      <input 
        className="input input-bordered w-full max-w-xs mb-2" 
        placeholder='Name'
        type="text"
        name="name"
        value={organizationData.name}
        onChange={handleInputChange}
      />
      <input 
        className="input input-bordered w-full max-w-xs mb-2" 
        placeholder='Location'
        type="text"
        name="location"
        value={organizationData.location}
        onChange={handleInputChange}
      />
      <input 
        className="input input-bordered w-full max-w-xs mb-2" 
        placeholder='Contact'
        type="text"
        name="contact"
        value={organizationData.contact}
        onChange={handleInputChange}
      />
      {creationStatus && (
        <p style={{ color: creationStatus.status === 'success' ? 'green' : 'red' }}>
          {creationStatus.message}
        </p>
      )}
      <button 
        className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white" 
        type="button" 
        onClick={handleCreateOrganization}
      >
        Create Organization
      </button>
    </form>
  );
};

export default CreateOrganization;
