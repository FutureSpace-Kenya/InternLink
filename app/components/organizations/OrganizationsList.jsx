"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jobs_listing/organizations');
        setOrganizations(response.data.organizations);
        setErrorMessage(''); // Clear error message on successful fetch
      } catch (error) {
        console.error('Error fetching organizations:', error);
        setOrganizations([]); // Clear organizations on error
        setErrorMessage('Error fetching organizations');
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h5 className="text-green-700 pt-2">Organizations</h5>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {organizations.length > 0 ? (
        <table className="border border-gray-500">
          <thead className="bg-green-600 text-black">
            <tr>
              <th className="px-8 py-1">ID</th>
              <th className="px-8 py-1">Name</th>
              <th className="px-8 py-1">Location</th>
              <th className="px-8 py-1">Contact</th>
            </tr>
          </thead>
          <tbody className="divide divide-y divide-gray-300">
            {organizations.map((organization) => (
              <tr key={organization.id}>
                <td className="px-8 py-1">{organization.id}</td>
                <td className="px-8 py-1">{organization.name}</td>
                <td className="px-8 py-1">{organization.location}</td>
                <td className="px-8 py-1">{organization.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default OrganizationsList;