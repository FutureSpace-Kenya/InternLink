"use client"

import React, { useState } from 'react';
import axios from 'axios';

const DepartmentList = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [departments, setDepartments] = useState([]);
  const [message, setMessage] = useState('');

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments`
      );

      setDepartments(response.data.departments);
      setOrganizationId(''); // clear organization id
      setMessage(''); // Clear message on successful fetch
    } catch (error) {
      console.error(error);
      setDepartments([]); // Clear departments on error
      setMessage('Error fetching departments');
    }
  };

  const handleFetchDepartments = () => {
    fetchDepartments();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h5 className="text-green-700 pt-2">Departments</h5>
      <div className="flex flex-row justify-center items-center gap-4">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Organization ID"
          value={organizationId}
          onChange={handleOrganizationIdChange}
        />
        <button
          className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
          type="button"
          onClick={handleFetchDepartments}
        >
          Fetch Departments
        </button>
      </div>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      {departments.length > 0 && (
        <table className="border border-gray-500">
          <thead className="bg-green-600 text-black">
            <tr>
              <th className="px-8 py-1">ID</th>
              <th className="px-8 py-1">Name</th>
              <th className="px-8 py-1">Organization ID</th>
            </tr>
          </thead>
          <tbody className="divide divide-y divide-gray-300">
            {departments.map((department) => (
              <tr key={department.id}>
                <td className="px-8 py-1">{department.id}</td>
                <td className="px-8 py-1">{department.name}</td>
                <td className="px-8 py-1">{department.organizationId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DepartmentList;

// Backend
export async function GET(request) {
  try {
    const { organizationId } = request.params;
    
    // Fetch all departments from the database based on the provided organizationId
    const departments = await Department.findAll({
      where: {
        organizationId: organizationId,
      },
    });

    // Send a successful response with the departments data
    return NextResponse.json({
      message: "Fetched all departments successfully",
      departments,
    });
  } catch (error) {
    // Handle any errors that may occur during the fetch process
    console.error(error);
    return NextResponse.json({ message: "Error fetching departments", error });
  }
}
