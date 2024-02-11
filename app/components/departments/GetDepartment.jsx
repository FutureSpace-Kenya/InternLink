"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetDepartment = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [department, setDepartment] = useState(null);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchDepartment = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/jobs_listing/organizations/${organizationId}/departments/${departmentId}`
      );

      setDepartment(response.data);
      setMessage(''); // Clear message on successful fetch
      setShowModal(true); // Display modal
      // clear fields
      setOrganizationId('');
      setDepartmentId('');
    } catch (error) {
      console.error(error);
      setDepartment(null);
      setShowModal(false); // Hide modal on error
      setMessage('Error fetching department');
    }
  };

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  };

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const handleFetchDepartment = () => {
    fetchDepartment();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form>
        <h5 className="text-green-700">Fetch Department</h5>
        <input 
          className="input input-bordered w-full max-w-xs mb-2"
          type="text" 
          placeholder="Enter Organization Id" 
          value={organizationId} 
          onChange={handleOrganizationIdChange} 
        />
        <input 
          className="input input-bordered w-full max-w-xs mb-2"
          type="text" 
          placeholder="Enter Department Id" 
          value={departmentId} 
          onChange={handleDepartmentIdChange} 
        />
        <button 
          className="btn text-black bg-green-500 hover:bg-green-700 hover:text-white"
          type='button'
          onClick={handleFetchDepartment}
        >
          Fetch Department
        </button>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </form>

      {showModal && department && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h5 className="text-green-700">Department Details</h5>
            <p>Name: {department.name}</p>
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

export default GetDepartment;

// Backend
export async function GET(request, { params }) {
    try {
      const { departmentId: id } = params;
  
      // Find the department with the specified ID
      const department = await Department.findByPk(id);
  
      // Check if the department was found
      if (!department) {
        return NextResponse.json({message: "Department not found"})
      }
  
      // Send a successful response with the department data
        return NextResponse.json(department)
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error fetching department", error})
    }
}
