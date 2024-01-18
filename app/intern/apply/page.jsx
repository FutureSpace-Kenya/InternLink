'use client'
import React, { useState, useEffect } from 'react';
import NavBar from "/app/components/NavBar";
import {useSession} from "next-auth/react";

const ApplyPage = () => {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        UserID: '',
        OrganizationID: '',
        JobID: '',
        ResumeLink: '',
        CoverLetter: ''
    });

    useEffect(() => {
        document.title = "InternLink™"
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <NavBar/>
            <div className="grid place-items-center my-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Apply</h1>
                <form className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow flex flex-col"
                      onSubmit={handleSubmit}>
                    <label htmlFor="UserID" className="text-gray-700 text-xs">User ID</label>
                    <input type="text" id="UserID" name="UserID" placeholder="Enter your User ID"
                           className="input input-sm text-xs mt-2 mb-4 input-info rounded-md" onChange={handleChange}/>

                    <label htmlFor="OrganizationID" className="text-gray-700 text-xs">Organization ID</label>
                    <input type="text" id="OrganizationID" name="OrganizationID" placeholder="Enter Organization ID"
                           className="input input-sm text-xs mt-2 mb-4 input-info rounded-md" onChange={handleChange}/>

                    <label htmlFor="JobID" className="text-gray-700 text-xs">Job ID</label>
                    <input type="text" id="JobID" name="JobID" placeholder="Enter Job ID"
                           className="input input-sm text-xs mt-2 mb-4 input-info rounded-md" onChange={handleChange}/>

                    <label htmlFor="ResumeLink" className="text-gray-700 text-xs">Resume Link</label>
                    <input type="text" id="ResumeLink" name="ResumeLink" placeholder="Paste Resume Link"
                           className="input input-sm text-xs mt-2 mb-4 input-info rounded-md" onChange={handleChange}/>

                    <label htmlFor="CoverLetter" className="text-gray-700 text-xs">Cover Letter</label>
                    <textarea id="CoverLetter" name="CoverLetter" placeholder="Write your cover letter"
                              className="input input-sm text-xs mt-2 mb-4 input-info rounded-md h-32"
                              onChange={handleChange}></textarea>

                    <button type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Submit
                    </button>
                </form>
            </div>
        </div>

    )
}

export default ApplyPage;