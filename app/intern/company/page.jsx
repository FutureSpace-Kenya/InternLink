"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NavBar from "app/components/NavBar";
import CompanyStats from "app/components/CompanyStats";
import React, { useState } from "react";

const Company = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    if (!session)
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );

    const company = {
        name: "Google",
        description:
            "Google LLC is an American multinational technology company that specializes in Internet-related services and products.",
        size: 100000,
        location: "California, United States",
        contactInfo: {
            phone: "+1-650-253-0000",
            email: "contact@google.com",
        },
        departments: [
            {
                name: "Department 1",
                description: "This is department 1",
            },
            {
                name: "Department 2",
                description: "This is department 2",
            },
            {
                name: "Department 3",
                description: "This is department 3",
            },
            {
                name: "Department 4",
                description: "This is department 4",
            },
        ],
    };
    return (
        <div className="overflow-hidden">
            <NavBar />

            <div className="p-x-4 w-screen">
                <div className="flex flex-wrap w-full">
                    <div className="w-full sm:w-1/3 bg-red-300">
                        <div className="w-full p-5 ">
                            <div className="p-5 rounded-md bg-white shadow">
                                {/* Company Profile Picture */}
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                {/* Company details */}
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-2xl font-bold">
                                        {company.name}
                                    </h1>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-building"></i>
                                            <p className="text-sm">
                                                {company.size}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <p className="text-sm">
                                                {company.location}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-phone"></i>
                                            <p className="text-xs">
                                                {company.contactInfo.phone}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-envelope"></i>
                                            <p className="text-xs">
                                                {company.contactInfo.email}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{company.description}</p>
                                    <CompanyStats />
                                </div>
                            </div>
                        </div>
                        {/* Departments */}
                        <div className="w-full p-5">
                            <div className="collapse collapse-open border border-base-300 bg-base-200">
                                <div className="flex items-center justify-between w-full p-4 rounded-md bg-white collapse-title text-xl font-medium">
                                    Departments
                                    <i class="text-lg fa-solid fa-plus"></i>
                                </div>
                                <div className="collapse-content mt-4">
                                    {company.departments.map(
                                        (department, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center bg-slate-200 mb-1 rounded-md p-4"
                                            >
                                                <div>
                                                    <p className="text-lg font-bold">
                                                        {department.name}
                                                    </p>
                                                    <p>
                                                        {department.description}
                                                    </p>
                                                </div>
                                                <button className="btn btn-success btn-sm">
                                                    Edit
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 bg-blue-500">
                        <h1>Company Engagement</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
