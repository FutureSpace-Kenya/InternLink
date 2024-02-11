"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetOrganization = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [organization, setOrganization] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchOrganization = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/jobs_listing/organizations/${organizationId}`);
      setOrganization(response.data);
      setError(null); // Clear error on successful fetch
      setShowModal(true); // Display modal
      // Reset organizationId after successful fetch
      setOrganizationId('');
    } catch (error) {
      console.error('Error fetching organization:', error);
      // Clear organization on fetch error
      setOrganization(null);
      setShowModal(false); // Hide modal on error
      setError('Error fetching organization');
    }
  };

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleFetchOrganization = () => {
    fetchOrganization();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleFetchOrganization}>
        <h5 className="text-green-700">Fetch Organization</h5>
        <input 
          className="input input-bordered w-full max-w-xs mb-2"
          type="text" 
          placeholder="Organization Id"
          value={organizationId} 
          onChange={handleOrganizationIdChange}
        />
        <button 
          className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
          type='button'
          onClick={handleFetchOrganization}
        >
          Fetch Organization
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      {showModal && organization && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h5 className="text-green-700">Organization Details</h5>
            <p>Name: {organization.name}</p>
            <p>Location: {organization.location}</p>
            <p>Contact: {organization.contact}</p>
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

export default GetOrganization;