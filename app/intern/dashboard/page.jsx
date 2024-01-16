"use client";
import React from "react";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/router";
import Notification from "/app/Notification";

const Dashboard = () => {
    const {data: session} = useSession();

    const companies = [
        {
            id: 1,
            logo: "https://futurespace.vercel.app/resources/FsOutline.png",
            name: "FutureSpace",
            description: "FutureSpace Kenya is a software development company that builds enterprise software solutions.",
            positions: 0,
            employees: 0,
            services: [
                {icon: "fas fa-cog fa-spin", name: "Solutions"},
                {icon: "fas fa-rocket", name: "Premium"},
            ]
        },
        {
            id: 2,
            logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
            name: "Google",
            description: "Create space for everyone to find belonging at Google.",
            positions: 3,
            employees: 7005,
            services: [
                {icon: "fas fa-cube", name: "Software"},
                {icon: "fas fa-gamepad", name: "Google Play"},
                {icon: "fas fa-circle-check", name: "Actively Hiring"},
            ]
        },
        {
            id: 3,
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
            name: "Facebook",
            description: "Learn about our culture, our people, and career opportunities at the Facebook",
            positions: 3,
            employees: 3000,
            services: [
                {icon: "fas fa-cube", name: "Software"},
                {icon: "fab fa-meta", name: "Meta Connect"},
                {icon: "fas fa-circle-check", name: "Actively Hiring"},
            ]
        },
        {
            id: 4,
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
            name: "Apple",
            description: "Apple is a place where extraordinary people gather to do their best work.",
            positions: 3,
            employees: 3000,
            services: [
                {icon: "fas fa-cube", name: "Software"},
                {icon: "fas fa-headphones", name: "Apple Music"},
                {icon: "fas fa-circle-check", name: "Actively Hiring"},
            ]
        }
    ];

    const internships = [
        {
            id: "1",
            logo: "https://futurespace.vercel.app/resources/FsOutline.png",
            title: "Software Engineering",
            company: "FutureSpace",
            location: "Nairobi, Kenya",
            salary: "Ksh. 100,000",
            posted: "1 day ago",
        },
        {
            id: "2",
            logo: "https://futurespace.vercel.app/resources/FsOutline.png",
            title: "Software Engineering",
            company: "FutureSpace",
            location: "Nairobi, Kenya",
            salary: "Ksh. 100,000",
            posted: "2 days ago",
        },
    ];

    if (!session) {
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
                <span className="absolute w-96 top-5 right-0">
                    <Notification notifications={[{type: 'loading', content: 'Loading sign in session'}]}/>
                </span>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-green-500 p-4 flex justify-between items-center text-white">
                <p className="text-2xl font-semibold">InternLink™</p>
                <div className="flex gap-2">
                    <button
                        className="text-white bg-green-700 btn ring-1 ring-gray-100 ring-offset-1 btn-circle btn-ghost btn-sm">
                        <i className="fa-solid fa-bell-slash"></i>
                    </button>
                    <button
                        className="text-white bg-green-700 btn ring-1 ring-gray-100 ring-offset-1 btn-circle btn-ghost btn-sm">
                        <i
                            className={
                                session.user
                                    ? "fa-solid fa-user"
                                    : "fas fa-sign-in-alt"
                            }
                        ></i>
                    </button>
                </div>
            </nav>
            <main className="">
                <div className="w-full bg-green-100 grid grid-cols-1 place-items-center h-72 gap-6">
                    <div className="landing-page">
                        <div className="text-center">
                            <p
                                className="text-gray-500 text-sm font-semibold sm:text-base"
                            >
                                Shape your career with InternLink™
                            </p>
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:font-black"
                            >
                                Find your dream :{" "}
                                <span className="text-green-500">
                                    internship
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8">
                    <h1
                        className="text-3xl mb-6 sm:text-4xl font-bold sm:font-black"
                    >
                        Featured companies hiring now
                    </h1>

                    <div className="cards gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {companies.map((company, index) => (
                            <div key={index} className="custom-card">
                                <div className="flex px-3 pt-3 gap-4 items-center">
                                    <div
                                        className="logo logo-sq-14 grid place-items-center bg-gray-800 text-white w-14 h-14 rounded-md">
                                        <img className={"h-12 object-cover"} src={company.logo} alt={company.name}/>
                                    </div>
                                    <div className="info">
                                        <h1 className="text-2xl font-bold">{company.name}</h1>
                                        <p className="text-sm text-gray-500">{company.employees}+ partners</p>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="mt-4 px-3 font-medium">
                                        {company.description}
                                    </div>

                                    <div className="flex px-3 flex-wrap gap-2 mt-4">
                                        {company.services.map((service, serviceIndex) => (
                                            <div key={serviceIndex} className="ring-1 ring-green-500 badge-custom">
                                                <i className={service.icon}></i>
                                                {service.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="border-b-2 border-gray-300 w-full mt-4"></div>
                                    <div className="px-3 hover:bg-gray-200 pt-4 rounded mt-1 pb-3">
                                        <Link className="flex positions-link justify-between items-center"
                                              href={`/intern/company?id=${company.id}`}>
                                            <span className="text-md font-semibold hover:underline underline-offset-1">
                                                {company.positions} Open Positions
                                            </span>
                                            <i className="fa-solid fa-chevron-right text-sm"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="flex flex-col mt-4 justify-center p-4 sm:p-6 md:p-8">
                    <h1 className="text-3xl mb-6 sm:text-4xl font-bold sm:font-black">
                        Trending internship opportunities
                    </h1>

                    <a href="/intern/jobs" className="underline underline-offset-1">
                        View all jobs
                    </a>

                    <div className="main flex mt-4">
                        <div className="left w-full md:w-3/4">
                            {internships.map((internship, index) => (
                                <div key={index} className="internship-card">
                                    <div className="start flex flex-col sm:flex-row gap-4 justify-center">
                                        <div
                                            className="logo logo-sq-14 grid place-items-center bg-secondary text-white w-14 h-14 rounded-md">
                                            <img className={"h-12 object-cover"} src={internship.logo}
                                                 alt={internship.company}/>
                                        </div>
                                        <div className="info flex flex-col gap-1">
                                            <h1 className="text-2xl font-bold">{internship.title}</h1>
                                            <div className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                                                <p className="text-gray-800 font-bold">{internship.company}</p>
                                                |<p className="">{internship.location}</p>|
                                                <p className="">{internship.salary}</p>|
                                                <p className="">{internship.posted}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-container flex gap-3">
                                        <Link className="btn btn-sm ring-1 ring-offset-1 btn-outline" href={''}>
                                            Save
                                        </Link>
                                        <Link className="btn ring-1 ring-offset-1 ring-secondary btn-sm btn-primary"
                                              href={'/intern/apply/' + internship.id}>
                                            Apply
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="right hidden md:w-1/4"></div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;