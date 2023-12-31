'use client'
import React from 'react';
import {useSession} from "next-auth/react";

const Dashboard = () => {
    const {data: session} = useSession();

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
        {name: 'Company 1', industry: 'Software', size: '100-500', location: 'City A'},
        {name: 'Company 2', industry: 'Hardware', size: '500-1000', location: 'City B'},
    ];

    const applications = [
        {jobId: '1', status: 'Pending'},
        {jobId: '2', status: 'Accepted'},
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
                <p className="text-2xl font-semibold">
                    InternLink™
                </p>
                <div className="flex gap-2">
                    <button
                        className="text-white bg-green-700 btn ring-1 ring-gray-100 ring-offset-1 btn-circle btn-ghost btn-sm">
                        <i className="fa-solid fa-bell-slash"></i>
                    </button>
                    <button
                        className="text-white bg-green-700 btn ring-1 ring-gray-100 ring-offset-1 btn-circle btn-ghost btn-sm">
                        <i className={session.user ? "fa-solid fa-user" : "fas fa-sign-in-alt"}></i>
                    </button>
                </div>
            </nav>
            <main className="">
                <div className="w-full bg-green-100 grid grid-cols-1 place-items-center h-72 gap-6">
                    <div className="landing-page">
                        <div className="text-center">
                            <p className={`text-gray-500 text-sm font-semibold sm:text-base`}>
                                Shape your career with InternLink™
                            </p>
                            <h1 className={`text-5xl font-bold mt-3 sm:font-black`}>
                                Find your dream : <span className="text-green-500">internship</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center p-4">
                    <h1 className={`text-3xl mb-6 sm:text-4xl font-bold sm:font-black`}>
                        Featured companies hiring now
                    </h1>
                    <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="border rounded-md p-4 border-gray-300 w-full">
                            <div className="flex gap-4 items-center">
                                <div className="logo grid place-items-center bg-green-500 w-14 h-14 rounded-md">
                                    <i className={`fa-brands fa-google text-2xl`}></i>
                                </div>
                                <div className="info">
                                    <h1 className="text-2xl font-bold">Google</h1>
                                    <p className="text-sm text-gray-500">3000+ employees</p>
                                </div>
                            </div>

                            <div className="mt-4 font-medium">
                                Create space for everyone to find belonging at Google.
                            </div>
                            <div className="flex gap-2 mt-4">
                                <div className="badge-custom">
                                    <i className={`fa-solid fa-cube`}></i>
                                    Software
                                </div>
                                <div className="badge-custom">
                                    Hardware
                                </div>
                            </div>

                            <div className="line">

                            </div>
                            <div className="open">
                                3 Open Positions
                                <i className={`fa-solid fa-chevron-right text-sm`}></i>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Dashboard;