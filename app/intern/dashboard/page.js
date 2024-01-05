'use client'
import React from 'react';
import {useSession} from "next-auth/react";
import Link from "next/link";

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
                            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:font-black`}>
                                Find your dream : <span className="text-green-500">internship</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-4">
                    <h1 className={`text-3xl mb-6 sm:text-4xl font-bold sm:font-black`}>
                        Featured companies hiring now
                    </h1>

                    <div className="cards gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


                        <div className="custom-card">
                            <div className="flex px-3 pt-3 gap-4 items-center">
                                <div
                                    className="logo grid place-items-center bg-gray-800 text-white w-14 h-14 rounded-md">
                                    <img className={'h-12 object-cover'}
                                         src={'https://futurespace.vercel.app/resources/FsOutline.png'}
                                         alt={'FutureSpace'}/>
                                </div>
                                <div className="info">
                                    <h1 className="text-2xl font-bold">FutureSpace</h1>
                                    <p className="text-sm text-gray-500">6+ partners</p>
                                </div>
                            </div>

                            <div className="middle">
                                <div className="mt-4 px-3 font-medium">
                                    FutureSpace Kenya is a software development company that builds enterprise software
                                    solutions.
                                </div>

                                <div className="flex px-3 flex-wrap gap-2 mt-4">
                                    <div className="ring-1 ring-green-500 badge-custom">
                                        <i className={`fa-solid fa-gear fa-spin`}></i>
                                        Solutions
                                    </div>

                                    <div className="ring-1 ring-yellow-500 badge p-3 badge-warning gap-2">
                                        <i className={`fa-solid fa-rocket`}></i>
                                        Premium
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="border-b-2 border-gray-300 w-full mt-4">

                                </div>
                                <div className="px-3 hover:bg-gray-200 pt-4 rounded mt-1 pb-3">
                                    <Link className={'flex positions-link justify-between items-center'}
                                          href={`/intern/company/4`}>
                                    <span className={`text-md font-semibold hover:underline underline-offset-1`}>
                                        0 Open Positions
                                    </span>
                                        <i className={`fa-solid fa-chevron-right text-sm`}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="custom-card">
                            <div className="flex px-3 pt-3 gap-4 items-center">
                                <div
                                    className="logo grid place-items-center bg-orange-400 text-white w-14 h-14 rounded-md">
                                    <i className={`fa-brands fa-google text-2xl`}></i>
                                </div>
                                <div className="info">
                                    <h1 className="text-2xl font-bold">Google</h1>
                                    <p className="text-sm text-gray-500">3000+ employees</p>
                                </div>
                            </div>

                            <div className="middle">
                                <div className="mt-4 px-3 font-medium">
                                    Create space for everyone to find belonging at Google.
                                </div>

                                <div className="flex px-3 flex-wrap gap-2 mt-4">
                                    <div className="ring-1 ring-green-500 badge-custom">
                                        <i className={`fa-solid fa-cube`}></i>
                                        Software
                                    </div>
                                    <div className="ring-1 ring-green-500 badge-custom">
                                        <i className={`fa-brands fa-hashnode`}></i>
                                        Hardware
                                    </div>

                                    <div className="ring-1 ring-green-500 badge p-3 badge-warning gap-2">
                                        <i className={`fa-solid fa-circle-check`}></i>
                                        Actively hiring
                                    </div>
                                </div>
                            </div>

                            <div className="bottom">
                                <div className="border-b-2 border-gray-300 w-full mt-4">

                                </div>
                                <div className="px-3 hover:bg-gray-200 pt-4 rounded mt-1 pb-3">
                                    <Link className={'flex positions-link justify-between items-center'}
                                          href={`/intern/company/1`}>
                                    <span className={`text-md font-semibold hover:underline underline-offset-1`}>
                                        3 Open Positions
                                    </span>
                                        <i className={`fa-solid fa-chevron-right text-sm`}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="custom-card">
                            <div className="flex px-3 pt-3 gap-4 items-center">
                                <div
                                    className="logo grid place-items-center bg-primary text-white w-14 h-14 rounded-md">
                                    <i className={`fa-brands fa-facebook text-2xl`}></i>
                                </div>
                                <div className="info">
                                    <h1 className="text-2xl font-bold">Facebook</h1>
                                    <p className="text-sm text-gray-500">3000+ employees</p>
                                </div>
                            </div>

                            <div className="middle">
                                <div className="mt-4 px-3 font-medium">
                                    Learn about our culture, our people, and career opportunities at the Facebook
                                </div>

                                <div className="flex px-3 flex-wrap gap-2 mt-4">
                                    <div className="ring-1 ring-green-500 badge-custom">
                                        <i className={`fa-brands fa-hashnode`}></i>
                                        Hardware
                                    </div>

                                    <div className="ring-1 ring-green-500 badge p-3 badge-warning gap-2">
                                        <i className={`fa-solid fa-circle-check`}></i>
                                        Actively hiring
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="border-b-2 border-gray-300 w-full mt-4">

                                </div>
                                <div className="px-3 hover:bg-gray-200 pt-4 rounded mt-1 pb-3">
                                    <Link className={'flex positions-link justify-between items-center'}
                                          href={`/intern/company/2`}>
                                    <span className={`text-md font-semibold hover:underline underline-offset-1`}>
                                        3 Open Positions
                                    </span>
                                        <i className={`fa-solid fa-chevron-right text-sm`}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="custom-card">
                            <div className="flex px-3 pt-3 gap-4 items-center">
                                <div
                                    className="logo grid place-items-center bg-secondary text-white w-14 h-14 rounded-md">
                                    <i className={`fa-brands fa-apple text-2xl`}></i>
                                </div>
                                <div className="info">
                                    <h1 className="text-2xl font-bold">Apple</h1>
                                    <p className="text-sm text-gray-500">3000+ employees</p>
                                </div>
                            </div>

                            <div className="middle">
                                <div className="mt-4 px-3 font-medium">
                                    Apple is a place where extraordinary people gather to do their best work.
                                </div>

                                <div className="flex px-3 flex-wrap gap-2 mt-4">
                                    <div className="ring-1 ring-green-500 badge-custom">
                                        <i className={`fa-solid fa-headphones`}></i>
                                        Music
                                    </div>

                                    <div className="ring-1 ring-green-500 badge p-3 badge-warning gap-2">
                                        <i className={`fa-solid fa-circle-check`}></i>
                                        Actively hiring
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="border-b-2 border-gray-300 w-full mt-4">

                                </div>
                                <div className="px-3 hover:bg-gray-200 pt-4 rounded mt-1 pb-3">
                                    <Link className={'flex positions-link justify-between items-center'}
                                          href={`/intern/company/3`}>
                                    <span className={`text-md font-semibold hover:underline underline-offset-1`}>
                                        3 Open Positions
                                    </span>
                                        <i className={`fa-solid fa-chevron-right text-sm`}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="flex flex-col mt-4 justify-center p-4">
                    <h1 className={`text-3xl mb-6 sm:text-4xl font-bold sm:font-black`}>
                        Trending internship opportunities
                    </h1>

                    <a href={`/intern/jobs`} className="underline underline-offset-1">View all jobs</a>

                    <div className="main flex mt-4">

                        <div className="left w-full md:w-3/4">
                            <div className="internship-card">
                                <div className="start flex gap-4 justify-center">
                                    <div
                                        className="logo grid place-items-center bg-secondary text-white w-14 h-14 rounded-md">
                                        <img className={'h-12 object-cover'}
                                             src={'https://futurespace.vercel.app/resources/FsOutline.png'}
                                             alt={'FutureSpace'}/>
                                    </div>
                                    <div className="info flex flex-col gap-1">
                                        <h1 className="text-2xl font-bold">Software Engineering</h1>
                                        <div className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                                            <p className="text-gray-800 font-bold">FutureSpace</p>
                                            |
                                            <p className="">Nairobi, Kenya</p>
                                            |
                                            <p className="">Ksh. 100,000</p>
                                            |
                                            <p className="">1 day ago</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="button-container flex gap-3">
                                    <button className="btn btn-outline">
                                        Save
                                    </button>
                                    <button className="btn btn-primary">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className={`internship-card`}>
                                <div className="start flex gap-4 justify-center">
                                    <div
                                        className="logo grid place-items-center bg-secondary text-white w-14 h-14 rounded-md">
                                        <img className={'h-12 object-cover'}
                                             src={'https://futurespace.vercel.app/resources/FsOutline.png'}
                                             alt={'FutureSpace'}/>
                                    </div>
                                    <div className="info flex flex-col gap-1">
                                        <h1 className="text-2xl font-bold">Software Engineering</h1>
                                        <div className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                                            <p className="text-gray-800 font-bold">FutureSpace</p>
                                            |
                                            <p className="">Nairobi, Kenya</p>
                                            |
                                            <p className="">Ksh. 100,000</p>
                                            |
                                            <p className="">1 day ago</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="button-container flex gap-3">
                                    <button className="btn btn-outline">
                                        Save
                                    </button>
                                    <button className="btn btn-primary">
                                        Apply
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="right hidden md:w-1/4">
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Dashboard;