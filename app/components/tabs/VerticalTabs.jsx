"use client";
import React, { useEffect, useState } from "react";
import NavBar from "/app/components/NavBar";
import Loading from "/app/loading";
import Notification from "/app/Notification";

const VerticalTabs = ({ company: companyProp, internships: internshipsProp }) => {
    const [selectedTab, selectTab] = useState("1");
    const [company, setCompany] = useState({});
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        setCompany(companyProp);
        setInternships(internshipsProp);
    }, [companyProp, internshipsProp]);

    if (Object.keys(company).length === 0 || company.departments === undefined) {
        return (
            <div>
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
        <div className="flex flex-col text-xs gap-2 w-full md:w-9/12 mt-4">

            <div className="flex border-b text-sm">
                <button className={`btn tab rounded-none btn-sm ${selectedTab === "1" ? "active" : ""}`}
                        onClick={() => selectTab("1")}>
                    <i className="fa-solid fa-bolt"></i> Overview
                </button>
                <button className={`btn tab rounded-none btn-sm ${selectedTab === "2" ? "active" : ""}`}
                        onClick={() => selectTab("2")}>
                    <i className="fa-brands fa-servicestack"></i> Internships
                </button>
            </div>

            <div className="w-full rounded-md sm:p-4 p-1">

                {selectedTab === "1" &&

                    <div>
                        <div className={"text-lg mb-3 font-semibold"}>
                            {company.name} Careers
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {company.departments.map((department) => {
                                const createdAt = new Date(department.createdAt).toLocaleDateString();
                                const updatedAt = new Date(department.updatedAt).toLocaleDateString();

                                return (
                                    <div key={department.id}
                                         className="department bg-white shadow-sm ring-1 ring-offset-1 border ring-gray-50 rounded-lg p-4 transition hover:scale-[1.01] hover:bg-green-100 h-32 flex flex-col justify-between">
                                        <h2 className="department-name text-2xl font-bold text-gray-800 mb-2">
                                            <i className="fa-solid fa-poo-storm mr-2"></i>
                                            {department.name}
                                        </h2>
                                        <div className="dates flex justify-end items-center gap-2">
                                            <p className="department-date flex items-center text-[10px] text-gray-400">
                                                <i className="fa-regular fa-clock mr-2"></i>
                                                {createdAt}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                }
                {selectedTab === "2" &&
                    <div>
                        <div className={"text-lg mb-3 font-semibold"}>
                            {company.name} Internships
                        </div>
                        <div className={"grid gap-2 grid-cols-1"}>
                            {internships.length > 0 ? (
                                internships.map((internship) => (
                                    <div key={internship.id}
                                         className={"bg-white shadow-sm ring-1 flex justify-between ring-offset-1 border ring-gray-50 rounded-lg p-4 my-2 transition hover:scale-[1.01] hover:bg-green-100"}>
                                        <div>
                                            <h2>{internship.description}</h2>
                                            <p>Skills: {internship.skills}</p>
                                            <p>Status: {internship.status}</p>
                                            <p>Created at: {new Date(internship.createdAt).toLocaleDateString()}</p>
                                            <p>Updated at: {new Date(internship.updatedAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="actions flex flex-col gap-1">
                                            <button className={"btn btn-sm tooltip btn-ghost btn-circle ring-1"}>
                                                <i className="fa-solid fa-share-nodes"></i>
                                            </button>
                                            <button className={"btn btn-sm tooltip btn-ghost btn-circle ring-1"}>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p className={"text-xs"}>{company.name} hasn't added any jobs yet <br /> Get notified
                                    when {company.name} posts new jobs.</p>
                            )}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default VerticalTabs;