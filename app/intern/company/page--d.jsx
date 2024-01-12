"use client";
import { useSession } from "next-auth/react";
import NavBar from "app/components/NavBar";
import React, { useState } from "react";
import DepartmentEditForm from "app/components/DepartmentEditForm";
import DepartmentAddForm from "app/components/DepartmentAddForm";
import CompanyProfile from "app/components/companyPage/CompanyProfile";
import Departments from "app/components/companyPage/Departments";
import ApplicationsDesktop from "app/components/companyPage/ApplicationsDesktop";
import JoblistingsDesktop from "app/components/companyPage/JoblistingsDesktop";
import ApplicationsMobile from "app/components/companyPage/ApplicationsMobile";
import JoblistingsMobile from "app/components/companyPage/JoblistingsMobile";

// Dummy data
import {
    usersData,
    company,
    applications,
    jobListings,
} from "app/intern/company/DummyData";

const Company = () => {
    const [currentDepartment, setCurrentDepartment] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageJL, setCurrentPageJL] = useState(1);
    const [applicationFilter, setApplicationFilter] = useState("");
    const [jobListingsFilter, setJobListingsFilter] = useState("");
    const { data: session } = useSession();

    if (!session)
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );

    // Making it random for now
    function getRandomUser(usersData) {
        const randomIndex = Math.floor(Math.random() * usersData.length);
        return usersData[randomIndex];
    }

    // Usage:
    // const randomUser = getRandomUser(usersData);
    const randomUser = usersData[1];

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

    // Picking the random user and checking if they are in the company
    const isUserInCompany = () => {
        return (
            randomUser.UserType.toLowerCase() === "company" &&
            randomUser.CompanyID === company.id
        );
    };

    const statuses = ["All", "Pending", "Accepted", "Rejected"];
    const durations = ["All", "Full Time", "Part Time", "Contract"];

    // Variable to determine is certain details should be shown
    let valid_to_display = false;

    // Logic to update valid variable
    valid_to_display = isUserInCompany();

    // Calculate start and end indices for the current page
    let start = (currentPage - 1) * 5;
    let end = start + 5;

    let start_jl = (currentPageJL - 1) * 5;
    let end_jl = start_jl + 5;

    // Slice the data array to get only the data for the current page
    let pageData = applications.slice(start, end);
    let pageData2 = jobListings.slice(start_jl, end_jl);

    // Apply filter to the data
    if (applicationFilter !== "") {
        if (applicationFilter === "All") {
            pageData = applications.slice(start, end);
        } else {
            let cleaned_pageData = applications.filter(
                (application) =>
                    application.status.toLowerCase() ===
                    applicationFilter.toLowerCase()
            );
            pageData = cleaned_pageData.slice(start, end);
        }
    }

    // Apply filter to the joblistings data
    if (jobListingsFilter !== "") {
        if (jobListingsFilter === "All") {
            pageData2 = jobListings.slice(start_jl, end_jl);
        } else {
            console.log(jobListingsFilter);
            let cleaned_pageData2 = jobListings.filter(
                (jobListing) =>
                    jobListing.duration.toLowerCase() ===
                    jobListingsFilter.toLowerCase()
            );
            pageData2 = cleaned_pageData2.slice(start_jl, end_jl);
        }
    }

    return (
        <div className="overflow-hidden bg-green-100 min-h-screen">
            <NavBar />

            <div className="p-x-4 w-screen container mx-auto my-auto">
                <div className="flex flex-wrap w-full">
                    {/* Company details */}
                    <div className="w-full sm:w-1/3 md:w-full lg:w-1/3">
                        {/* Company Profile Picture and Name */}
                        <CompanyProfile
                            company={company}
                            valid_to_display={valid_to_display}
                        />
                        {/* Departments */}
                        <Departments
                            company={company}
                            setCurrentDepartment={setCurrentDepartment}
                            valid_to_display={valid_to_display}
                        />
                    </div>

                    {/* Company Engagement */}
                    <div className="w-full sm:w-2/3 md:w-full lg:w-2/3">
                        <div className="w-full p-5">
                            {/* Applications desktop section */}
                            <ApplicationsDesktop
                                valid_to_display={valid_to_display}
                                setApplicationFilter={setApplicationFilter}
                                statuses={statuses}
                                pageData={pageData}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                applications={applications}
                                getStatusBadge={getStatusBadge}
                            />
                            {/* Joblistings desktop section */}
                            <JoblistingsDesktop
                                valid_to_display={valid_to_display}
                                durations={durations}
                                setJobListingsFilter={setJobListingsFilter}
                                pageData2={pageData2}
                                jobListings={jobListings}
                                currentPageJL={currentPageJL}
                                setCurrentPageJL={setCurrentPageJL}
                            />

                            {/* Applications mobile section */}
                            <ApplicationsMobile
                                applications={applications}
                                valid_to_display={valid_to_display}
                                getStatusBadge={getStatusBadge}
                            />

                            {/* Joblistings mobile section */}
                            <JoblistingsMobile
                                valid_to_display={valid_to_display}
                                jobListings={jobListings}
                            />
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
