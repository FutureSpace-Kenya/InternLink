'use client'
import React from 'react';
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();

    // Function to generate a random number between 1 and 3
    const randomSpan = () => Math.floor(Math.random() * 3) + 1;

    // Dummy data
    const internProfile = {
        name: 'John Doe',
        age: 22,
        skills: ['JavaScript', 'React', 'Node.js'],
        education: 'Computer Science, XYZ University',
        experience: '1 year at ABC Company',
    };

    const companies = [
        { name: 'Company 1', industry: 'Software', size: '100-500', location: 'City A' },
        { name: 'Company 2', industry: 'Hardware', size: '500-1000', location: 'City B' },
    ];

    const applications = [
        { jobId: '1', status: 'Pending' },
        { jobId: '2', status: 'Accepted' },
    ];

    const premiumMembership = {
        startDate: '2022-01-01',
        endDate: '2022-12-31',
        type: 'Gold',
    };

    if (!session) return <div className="min-h-screen grid place-items-center w-full">
        <span className="loading loading-ring loading-lg"></span>
    </div>;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-green-500 p-4 flex justify-between items-center text-white">
                <p className="text-lg">
                    {session.user.email}</p>
                <button className="text-white bg-green-700 btn ring-1 ring-gray-100 ring-offset-1 btn-circle btn-ghost btn-sm">
                    <i className={session.user ? "fa-solid fa-leaf" : "fas fa-sign-in-alt"}></i>
                </button>
            </nav>
            <main className="px-5 md:px-10 py-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <section className={`bg-white shadow rounded-lg p-6 mb-6 col-span-${randomSpan()}`}>
                        <h2 className="text-xl font-bold mb-4">Your Profile</h2>
                        <table className="table w-full">
                            <tbody>
                                <tr><td>Name</td><td>{internProfile.name}</td></tr>
                                <tr><td>Age</td><td>{internProfile.age}</td></tr>
                                <tr><td>Skills</td><td>{internProfile.skills.join(', ')}</td></tr>
                                <tr><td>Education</td><td>{internProfile.education}</td></tr>
                                <tr><td>Experience</td><td>{internProfile.experience}</td></tr>
                            </tbody>
                        </table>
                    </section>

                    <section className={`bg-white shadow rounded-lg p-6 mb-6 col-span-${randomSpan()}`}>
                        <h2 className="text-xl font-bold mb-4">Companies</h2>
                        {companies.map((company, index) => (
                            <table key={index} className="table w-full mb-4">
                                <tbody>
                                    <tr><td>Name</td><td>{company.name}</td></tr>
                                    <tr><td>Industry</td><td>{company.industry}</td></tr>
                                    <tr><td>Size</td><td>{company.size}</td></tr>
                                    <tr><td>Location</td><td>{company.location}</td></tr>
                                </tbody>
                            </table>
                        ))}
                    </section>

                    <section className={`bg-white shadow rounded-lg p-6 mb-6 col-span-${randomSpan()}`}>
                        <h2 className="text-xl font-bold mb-4">Your Applications</h2>
                        {applications.map((application, index) => (
                            <table key={index} className="table w-full mb-4">
                                <tbody>
                                    <tr><td>Job ID</td><td>{application.jobId}</td></tr>
                                    <tr><td>Status</td><td>{application.status}</td></tr>
                                </tbody>
                            </table>
                        ))}
                    </section>

                    <section className={`bg-white shadow rounded-lg p-6 col-span-${randomSpan()}`}>
                        <h2 className="text-xl font-bold mb-4">Premium Membership</h2>
                        <table className="table w-full">
                            <tbody>
                                <tr><td>Type</td><td>{premiumMembership.type}</td></tr>
                                <tr><td>Start Date</td><td>{premiumMembership.startDate}</td></tr>
                                <tr><td>End Date</td><td>{premiumMembership.endDate}</td></tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;