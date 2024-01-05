"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import NavBar from "app/components/NavBar";
import CompanyStats from "app/components/CompanyStats";
import React, { useState } from "react";
import DepartmentEditForm from "app/components/DepartmentEditForm";
import DepartmentAddForm from "app/components/DepartmentAddForm";

const Company = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDepartment, setCurrentDepartment] = useState(null);
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

    const applications = [
        {
            submissionDate: "2022-01-01",
            status: "Pending",
            name: "John Doe",
            position: "Software Developer",
        },
        {
            submissionDate: "2022-01-02",
            status: "Accepted",
            name: "Jane Doe",
            position: "Data Analyst",
        },
        {
            submissionDate: "2022-01-03",
            status: "Rejected",
            name: "Jim Doe",
            position: "Product Manager",
        },
        {
            submissionDate: "2022-01-03",
            status: "Accepted",
            name: "Ken Doe",
            position: "UI/UX Designer",
        },
    ];

    const jobListings = [
        {
            title: "Software Developer",
            description: "Develop and maintain software applications",
            requirements: "Knowledge in JavaScript, React, and Node.js",
            duration: "Full Time",
            deadline: "2022-12-31",
        },
        {
            title: "Data Analyst",
            description: "Analyze and interpret complex data sets",
            requirements:
                "Knowledge in SQL, Python, and data visualization tools",
            duration: "Part Time",
            deadline: "2022-11-30",
        },
        {
            title: "Product Manager",
            description: "Manage product development and strategy",
            requirements:
                "Experience in product management and business strategy",
            duration: "Contract",
            deadline: "2022-10-31",
        },
        {
            title: "UI/UX Designer",
            description: "Design responsive and user-friendly interfaces",
            requirements: "Experience in UI/UX design and prototyping",
            duration: "Contract",
            deadline: "2022-10-31",
        },
    ];

    const handleEditClick = (department) => {
        setCurrentDepartment(department);
        setIsOpen(true);
    };

    const getStatusBadge = (status) => {
        let badgeClass = "badge badge-ghost badge-sm";

        switch (status.toLowerCase()) {
            case "pending":
                badgeClass += " bg-yellow-300";
                break;
            case "accepted":
                badgeClass += " bg-green-300";
                break;
            case "rejected":
                badgeClass += " bg-red-300";
                break;
            default:
                break;
        }

        return <span className={badgeClass}>{status}</span>;
    };

    return (
        <div className="overflow-hidden bg-green-100">
            <NavBar />

            <div className="p-x-4 w-screen">
                <div className="flex flex-wrap w-full">
                    {/* Company details */}
                    <div className="w-full sm:w-1/3">
                        <div className="w-full p-5 ">
                            <div className="p-5 rounded-md bg-white shadow">
                                {/* Company Profile Picture and Name */}
                                <div className="flex flex-col items-center gap-4 mb-4">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <h1 className="text-2xl font-bold">
                                        {company.name}
                                    </h1>
                                </div>
                                {/* Company details */}
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <i className="text-sm fa-solid fa-location-dot"></i>
                                            <p className="text-sm">
                                                {company.location}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="text-sm fa-solid fa-building"></i>
                                            <p className="text-sm">
                                                {company.size}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="text-sm fa-solid fa-envelope"></i>
                                            <p className="text-sm">
                                                {company.contactInfo.email}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <i className="text-sm fa-solid fa-phone"></i>
                                            <p className="text-sm">
                                                {company.contactInfo.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{company.description}</p>
                                    <CompanyStats />
                                    <button className="btn w-full bg-green-500 text-white">
                                        Update Profle
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Departments */}
                        <div className="w-full p-5">
                            <div className="collapse collapse-open border border-base-300 bg-base-200">
                                <div className="flex items-center justify-between w-full p-4 rounded-md bg-white collapse-title text-2xl font-bold">
                                    Departments
                                    <i
                                        class="text-lg fa-solid fa-plus cursor-pointer"
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    "department-add-form"
                                                )
                                                .showModal()
                                        }
                                    ></i>
                                </div>
                                <div className="collapse-content mt-4">
                                    {company.departments.map(
                                        (department, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center bg-slate-100 hover:bg-slate-200 mb-1 rounded-md p-4"
                                            >
                                                <div>
                                                    <p className="text-base font-bold">
                                                        {department.name}
                                                    </p>
                                                    <p>
                                                        {department.description}
                                                    </p>
                                                </div>
                                                <button
                                                    className="btn bg-green-500 text-white btn-sm"
                                                    onClick={() => {
                                                        setCurrentDepartment(
                                                            department
                                                        );
                                                        document
                                                            .getElementById(
                                                                "department-form"
                                                            )
                                                            .showModal();
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Engagement */}
                    <div className="w-full sm:w-2/3">
                        <div className="w-full p-5">
                            {/* Applications section */}
                            <div className="w-full p-5 rounded-md bg-white shadow mb-10">
                                <div className="flex justify-between items-center p-4">
                                    <h1 className="text-2xl font-bold">
                                        Applications
                                    </h1>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        style={{ display: "none" }}
                                        href="/intern/company/engagement"
                                    >
                                        View
                                    </Link>
                                </div>

                                {/* Applications Table */}
                                <div className="overflow-x-auto">
                                    <table className="table sm:table-sm">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>
                                                    {/* <label>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                        />
                                                        Index
                                                    </label> */}
                                                </th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th>Position</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            {applications.map(
                                                (application, index) => (
                                                    <tr className="hover:bg-slate-200">
                                                        <th>
                                                            <label>
                                                                {/* <input
                                                                    type="checkbox"
                                                                    className="checkbox"
                                                                /> */}
                                                                {index + 1}
                                                            </label>
                                                        </th>
                                                        <td>
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className="avatar"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                >
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img
                                                                            src="/tailwind-css-component-profile-2@56w.png"
                                                                            alt="Avatar Tailwind CSS Component"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold">
                                                                        {
                                                                            application.name
                                                                        }
                                                                    </div>
                                                                    <div className="text-sm opacity-50">
                                                                        {
                                                                            application.submissionDate
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {getStatusBadge(
                                                                application.status
                                                            )}
                                                        </td>
                                                        <td>
                                                            {
                                                                application.position
                                                            }
                                                        </td>
                                                        <th>
                                                            <button className="btn btn-ghost btn-sm bg-green-500 text-white">
                                                                View
                                                            </button>
                                                        </th>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                        {/* foot */}
                                        {/* <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </tfoot> */}
                                    </table>
                                </div>
                            </div>
                            {/* Joblistings section */}
                            <div className="w-full p-5 rounded-md bg-white shadow">
                                <div className="flex justify-between items-center p-4">
                                    <h1 className="text-2xl font-bold">
                                        Job Listings
                                    </h1>
                                    <Link
                                        // className="btn btn-sm bg-green-500 text-white"
                                        href="/intern/company/engagement"
                                    >
                                        <i class="text-lg fa-solid fa-plus cursor-pointer"></i>
                                    </Link>
                                </div>

                                {/* Applications Table */}
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>
                                                    {/* <label>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                        />
                                                        Index
                                                    </label> */}
                                                </th>
                                                <th>Title</th>
                                                <th>Requirements</th>
                                                <th className="w-40">
                                                    Duration
                                                </th>
                                                <th className="w-44">
                                                    Deadline
                                                </th>
                                                {/* <th>Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            {jobListings.map(
                                                (listing, index) => (
                                                    <tr className="cursor-pointer hover:bg-slate-200">
                                                        <th>
                                                            <label>
                                                                {/* <input
                                                                    type="checkbox"
                                                                    className="checkbox"
                                                                /> */}
                                                                {index + 1}
                                                            </label>
                                                        </th>
                                                        <td>
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className="avatar"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                >
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img
                                                                            src="/tailwind-css-component-profile-2@56w.png"
                                                                            alt="Avatar Tailwind CSS Component"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold">
                                                                        {
                                                                            listing.title
                                                                        }
                                                                    </div>
                                                                    <div className="text-sm opacity-50">
                                                                        {
                                                                            listing.description
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-sm">
                                                                {
                                                                    listing.requirements
                                                                }
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-sm">
                                                                {
                                                                    listing.duration
                                                                }
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="text-sm">
                                                                {
                                                                    listing.deadline
                                                                }
                                                            </span>
                                                        </td>
                                                        {/* <th>
                                                            <button className="btn btn-ghost btn-sm bg-green-300">
                                                                View
                                                            </button>
                                                        </th> */}
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                        {/* foot */}
                                        {/* <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </tfoot> */}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modals */}
                    <DepartmentEditForm department={currentDepartment} />
                    <DepartmentAddForm />
                </div>
            </div>
        </div>
    );
};

export default Company;
