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
            department: "Engineering",
        },
        {
            submissionDate: "2022-01-02",
            status: "Accepted",
            name: "Jane Doe",
            position: "Data Analyst",
            department: "Data Science",
        },
        {
            submissionDate: "2022-01-03",
            status: "Rejected",
            name: "Jim Doe",
            position: "Product Manager",
            department: "Product",
        },
        {
            submissionDate: "2022-01-03",
            status: "Accepted",
            name: "Ken Doe",
            position: "UI/UX Designer",
            department: "Design",
        },
    ];

    const jobListings = [
        {
            title: "Software Developer",
            description: "Develop and maintain software applications",
            requirements: "Knowledge in JavaScript, React, and Node.js",
            duration: "Full Time",
            deadline: "2022-12-31",
            department: "Engineering",
        },
        {
            title: "Data Analyst",
            description: "Analyze and interpret complex data sets",
            requirements:
                "Knowledge in SQL, Python, and data visualization tools",
            duration: "Part Time",
            deadline: "2022-11-30",
            department: "Data Science",
        },
        {
            title: "Product Manager",
            description: "Manage product development and strategy",
            requirements:
                "Experience in product management and business strategy",
            duration: "Contract",
            deadline: "2022-10-31",
            department: "Product",
        },
        {
            title: "UI/UX Designer",
            description: "Design user interfaces and user experiences",
            requirements: "Knowledge in design tools like Sketch and Figma",
            duration: "Full Time",
            deadline: "2022-09-30",
            department: "Design",
        },
    ];

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
        <>
            <div className="overflow-hidden bg-green-100">
                <NavBar />
                <div className="p-x-4 w-screen container mx-auto">
                    <div className="flex flex-wrap w-full">
                        {/* Company details */}
                        <div className="w-full sm:w-1/3 md:w-full lg:w-1/3">
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
                                        <div className="lg:grid lg:grid-cols-2 gap-4 md:flex md:items-center md:w-full md:justify-center">
                                            <div className="mt-2 flex items-center gap-2">
                                                <i className="text-sm fa-solid fa-location-dot"></i>
                                                <p className="text-sm">
                                                    {company.location}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <i className="text-sm fa-solid fa-building"></i>
                                                <p className="text-sm">
                                                    {company.size}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <i className="text-sm fa-solid fa-envelope"></i>
                                                <p className="text-sm">
                                                    {company.contactInfo.email}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
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
                                                            {
                                                                department.description
                                                            }
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
                        <div className="w-full sm:w-2/3 md:w-full lg:w-2/3">
                            <div className="w-full p-5">
                                {/* Applications desktop section */}
                                <div className="hidden lg:block w-full p-5 rounded-md bg-white shadow mb-10">
                                    <div className="flex justify-between items-center p-4">
                                        <h1 className="text-2xl font-bold">
                                            Applications
                                        </h1>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            style={{ display: "none" }}
                                            href="/intern/company/"
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
                                                    <th>Department</th>
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
                                                            <td>
                                                                {
                                                                    application.department
                                                                }
                                                            </td>
                                                            <th>
                                                                {/* <button className="btn btn-ghost btn-sm bg-green-500 text-white">
                                                                View
                                                            </button> */}
                                                                <Link
                                                                    href={`/intern/company/applicant`}
                                                                >
                                                                    <i class="cursor-pointer text-lg fa-solid fa-pen-to-square"></i>
                                                                </Link>
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
                                {/* Joblistings desktop section */}
                                <div className="hidden lg:block w-full p-5 rounded-md bg-white shadow">
                                    <div className="flex justify-between items-center p-4">
                                        <h1 className="text-2xl font-bold">
                                            Job Listings
                                        </h1>
                                        <Link
                                            // className="btn btn-sm bg-green-500 text-white"
                                            href="/intern/company"
                                        >
                                            <i class="text-lg fa-solid fa-plus cursor-pointer"></i>
                                        </Link>
                                    </div>

                                    {/* Listings Table */}
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
                                                    <th className="whitespace-nowrap">
                                                        Title
                                                    </th>
                                                    <th className="w-38">
                                                        Department
                                                    </th>
                                                    <th>Requirements</th>
                                                    <th className="w-38">
                                                        Duration
                                                    </th>
                                                    <th className="w-40">
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
                                                                <div className="flex items-center gap-y-4">
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
                                                                        {/* <span className="badge badge-ghost badge-sm bg-green-100">
                                                                        {
                                                                            listing.department
                                                                        }
                                                                    </span> */}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span>
                                                                    {
                                                                        listing.department
                                                                    }
                                                                </span>
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
                                                                <div className="flex justify-between items-center">
                                                                    <span className="text-xs">
                                                                        {
                                                                            listing.deadline
                                                                        }
                                                                    </span>
                                                                    <i class="cursor-pointer text-sm text-red-500 fa-solid fa-trash"></i>
                                                                </div>
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

                                {/* Applications mobile section */}
                                <div className="lg:hidden rounded-md bg-white shadow p-5">
                                    <h1 className="text-2xl font-bold mb-5">
                                        Applications
                                    </h1>
                                    <div className="flex flex-wrap gap-2">
                                        {applications.map(
                                            (application, index) => (
                                                <div className="card w-full md:max-w-xs md:mr-5 bg-slate-50 shadow-md mb-1">
                                                    <div className="card-body">
                                                        <div className="card-title flex items-start justify-between">
                                                            <div>
                                                                <p className="font-bold">
                                                                    {
                                                                        application.name
                                                                    }
                                                                </p>
                                                                <span className="text-xs">
                                                                    {
                                                                        application.submissionDate
                                                                    }
                                                                </span>
                                                            </div>
                                                            <Link
                                                                href={`/intern/company/applicant`}
                                                            >
                                                                <i class="cursor-pointer text-lg fa-solid fa-pen-to-square"></i>
                                                            </Link>
                                                        </div>
                                                        <span className="mt-1">
                                                            {getStatusBadge(
                                                                application.status
                                                            )}
                                                        </span>
                                                        <div className="flex gap-2 justify-between mt-3">
                                                            <div className="flex gap-3">
                                                                <i class="fa-solid fa-user"></i>
                                                                <span className="text-sm">
                                                                    {
                                                                        application.position
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <i class="fa-solid fa-building-user"></i>
                                                                <span className="text-sm">
                                                                    {
                                                                        application.department
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Joblistings mobile section */}
                                <div className="lg:hidden rounded-md bg-white shadow p-5 mt-10">
                                    <div className="flex justify-between items-center p-4">
                                        <h1 className="text-2xl font-bold">
                                            Job Listings
                                        </h1>
                                        <Link
                                            // className="btn btn-sm bg-green-500 text-white"
                                            href="/intern/company"
                                        >
                                            <i class="text-lg fa-solid fa-plus cursor-pointer"></i>
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {jobListings.map((listing, index) => (
                                            <div className="card w-full md:max-w-xs md:mr-5 bg-slate-50 shadow-md mb-1">
                                                <div className="card-body">
                                                    <div className="card-title flex items-start justify-between">
                                                        <div>
                                                            <p className="font-bold">
                                                                {listing.title}
                                                            </p>
                                                            <span className="text-xs">
                                                                {
                                                                    listing.duration
                                                                }
                                                            </span>
                                                        </div>
                                                        <i class="cursor-pointer text-sm text-red-500 fa-solid fa-trash mt-2"></i>
                                                    </div>
                                                    <div className="flex gap-3 my-2">
                                                        <i class="text-green-500 fa-solid fa-building-user"></i>
                                                        <span className="text-green-500 text-sm">
                                                            {listing.department}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm hidden md:block">
                                                        {listing.description}
                                                    </p>
                                                    <div>
                                                        <p className="text-base">
                                                            {
                                                                listing.requirements
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
        </>
    );
};

export default Company;
