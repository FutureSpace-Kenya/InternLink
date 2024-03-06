"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Notification from "/app/Notification";
import NavBar from "/app/components/NavBar";
import Loading from "/app/loading";
import { formatDistanceToNow } from "date-fns";
import TypewriterEffect from "/app/components/TypewriterEffect";


const Dashboard = () => {
    const { data: session } = useSession();
    const [allCompanies, setAllCompanies] = React.useState([]);
    const [internships, setInternships] = React.useState([]);
    const types = ["Attachments", "Internships", "Opportunities"];

    useEffect(() => {
        document.title = "InternLink™";

        fetch(`/api/organizations`)
            .then(response => response.json())
            .then(data => {
                setAllCompanies(data.organizations);
            })
            .catch(error => {
                console.error(error);
            });

        fetch(`/api/jobs`)
            .then(response => response.json())
            .then(data => {
                setInternships(data.jobsWithDetails);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);


    if (!session) {
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
                <span className="absolute w-96 top-5 right-0">
                    <Notification notifications={[{ type: "loading", content: "Loading sign in session" }]} />
                </span>
            </div>
        );
    }

    if (!allCompanies || allCompanies.length === 0) {
        return (
            <div className="overflow-hidden bg-green-100 min-h-screen">
                <NavBar />
                <div className={`bg-white p-4 sm:p-6 md:p-6`}>
                    <Loading />
                </div>
                <span className="absolute w-96 top-20 right-0">
                    <Notification notifications={[{ type: "loading", content: "Fetching Company data" }]} />
                </span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
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
                                    <TypewriterEffect types={types} />
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

                        {allCompanies.map((company, index) => (
                            <div key={index} className="custom-card">
                                <div className="flex px-3 pt-3 gap-4 items-center">
                                    <div
                                        className="logo ring-1 overflow-hidden ring-offset-2 ring-green-400 logo-sq-14 grid place-items-center bg-green-500 text-white w-14 h-14 rounded-md">
                                        <img className={"h-14 object-cover object-top"} src={company.logo}
                                             alt={company.name} />
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
                                        {JSON.parse(company.services).map((service, serviceIndex) => (
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
                                            <img className={"h-12 object-cover"} src={internship.companyLogo}
                                                 alt={internship.companyName} />
                                        </div>
                                        <div className="info flex flex-col gap-1">
                                            <h1 className="text-2xl font-bold">{internship.description}</h1>
                                            <div className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                                                <p className="text-gray-800 font-bold">{internship.skills}</p>
                                                |<p className="">{internship.status}</p>|
                                                <p className="">{internship.companyName}</p>|
                                                <p className="">{formatDistanceToNow(new Date(internship.createdAt))} ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-container flex gap-3">
                                        <Link className="btn rounded-md btn-sm ring-1 ring-offset-1 btn-outline"
                                              href={""}>
                                            Save
                                        </Link>
                                        <Link
                                            className="btn rounded-md ring-1 ring-offset-1 ring-secondary btn-sm btn-primary"
                                            href={"/intern/apply?internship=" + internship.id}>
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
