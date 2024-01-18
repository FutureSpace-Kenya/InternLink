'use client'
import React, { useState, useEffect } from 'react';
import NavBar from "/app/components/NavBar";
import { useSession } from "next-auth/react";
import Loading from "/app/loading";
import Notification from "/app/Notification";

const ApplyPage = () => {
    const { data: session } = useSession();
    const [notification, setNotification] = useState({ type: 'loading', content: 'Loading job data' });
    const [job, setJob] = useState(null);
    const [organization, setOrganization] = useState([]);
    const [formData, setFormData] = useState({
        UserID: session?.user?.id || '',
        OrganizationID: '',
        JobID: '',
        ResumeLink: '',
        CoverLetter: ''
    });

    useEffect(() => {
        document.title = "InternLink™"
        const urlParams = new URLSearchParams(window.location.search);
        const jobID = urlParams.get('internship');

        //fetch the job details
        fetch(`/api/jobs/${jobID}`)
            .then(response => response.json())
            .then(data => {
                setNotification({ type: 'info', content: data.message })
                setJob(data.jobData)
                setOrganization(data.jobData.department.organization)
                setFormData(prevState => ({
                    ...prevState,
                    OrganizationID: data.jobData.department.organizationId,
                    JobID: data.jobData.id
                }));
            })
            .catch(error => {
                setNotification({ type: 'error', content: error.message })
            })

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

    if (!job || !session) {
        return (
            <div className="overflow-hidden bg-green-100 min-h-screen">
                <NavBar/>
                <div className={`bg-white p-4 sm:p-6 md:p-6`}>
                    <Loading/>
                </div>
                <span className="absolute w-96 top-20 right-0">
                    <Notification notifications={[{type: notification.type, content: notification.content}]}/>
                </span>
            </div>
        )
    }

    return (
        <div>
            <NavBar/>
            <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-4 my-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Apply for {job.description}</h1>
                <div className="bg-white shadow rounded-md p-2 mb-6">
                    <div className="flex flex-col md:justify-between md:flex-row md:items-start gap-4">
                        <div className="px-2">
                            <h2 className="text-2xl font-bold text-gray-700">{organization.name}</h2>
                            <p className="text-md text-gray-500 mb-2">{organization.description}</p>
                            <p className="flex items-center text-gray-700 mb-1">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                {organization.location}
                            </p>
                            <p className="flex items-center text-gray-700 mb-1">
                                <i className="fas fa-envelope mr-2"></i>
                                {organization.email || 'Not provided'}
                            </p>
                            <p className="flex items-center text-gray-700">
                                <i className="fas fa-phone mr-2"></i>
                                {organization.contact}
                            </p>
                        </div>
                        <img src={organization.logo} alt="Organization Logo"
                             className="md:w-32 md:h-32 h-48 w-full object-cover object-top rounded-md border-2 bg-green-500 border-gray-300"/>
                    </div>
                </div>
                <div className="w-full bg-white p-6 rounded-md shadow flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-gray-700">Department: {job.department.name}</h3>
                    <p className="text-gray-600">Status: <span className={`font-semibold ${job.status === "Not Available" ? 'text-red-500' : 'text-green-500'}`}>{job.status}</span></p>
                    <p className="text-gray-600">Skills Required: {job.skills}</p>
                </div>
                <form className="w-full mt-6 sm:mt-8 max-w-lg mx-auto bg-white flex flex-col"
                      onSubmit={handleSubmit}>
                    <input type="hidden" id="UserID" name="UserID" value={formData.UserID} />
                    <input type="hidden" id="OrganizationID" name="OrganizationID" value={formData.OrganizationID} />

                    <h1>
                        <span className="text-gray-700 mb-4 font-semibold">{job.description}</span>
                    </h1>
                    <input type="hidden" id="JobID" name="JobID" value={formData.JobID} />

                    <label htmlFor="ResumeLink" className="text-gray-700 text-xs">Resume Link</label>
                    <input type="text" id="ResumeLink" name="ResumeLink" placeholder="Paste Resume Link"
                           className="input input-sm text-xs mt-2 mb-4 input-info rounded-md" onChange={handleChange}/>

                    <label htmlFor="CoverLetter" className="text-gray-700 text-xs">Cover Letter</label>
                    <textarea id="CoverLetter" name="CoverLetter" placeholder="Write your cover letter"
                              className="textarea textarea-sm text-xs mt-2 mb-4 textarea-info rounded-md h-32"
                              onChange={handleChange}>
                    </textarea>

                    <button type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ApplyPage;