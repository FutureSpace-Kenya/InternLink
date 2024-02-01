'use client'
import React, {useEffect, useState} from "react";
import NavBar from "/app/components/NavBar";
import Loading from "/app/loading";
import Notification from "/app/Notification";

const VerticalTabs = (companyProp) => {
    const [selectedTab, selectTab] = useState("1");
    const [company, setCompany] = useState({});

    useEffect(() => {
        setCompany(companyProp.company);
    }, [companyProp]);

    if (Object.keys(company).length === 0 || company.departments === undefined) {
        return (
            <div>
                <div className={`bg-white p-4 sm:p-6 md:p-6`}>
                    <Loading/>
                </div>
                <span className="absolute w-96 top-20 right-0">
                    <Notification notifications={[{type: 'loading', content: 'Fetching Company data'}]}/>
                </span>
            </div>
        )
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
                        <div className={'text-lg mb-3 font-semibold'}>
                            {company.name} Careers
                        </div>
                        {company.departments.map((department) => {
                            const createdAt = new Date(department.createdAt).toLocaleDateString();
                            const updatedAt = new Date(department.updatedAt).toLocaleDateString();

                            return (
                                <div key={department.id} className="department bg-white shadow-sm ring-1 ring-offset-1 border ring-gray-50 rounded-lg p-4 my-4 transition hover:scale-[1.01] hover:bg-green-100">
                                    <h2 className="department-name text-2xl font-bold text-gray-800 mb-2">
                                        <i className="fas fa-building mr-2"></i>
                                        {department.name}
                                    </h2>
                                    <p className="department-date text-sm text-gray-600">
                                        <i className="fas fa-calendar-plus mr-2"></i>
                                        Created at: {createdAt}
                                    </p>
                                    <p className="department-date text-sm text-gray-600">
                                        <i className="fas fa-calendar-check mr-2"></i>
                                        Updated at: {updatedAt}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                }
                {selectedTab === "2" &&
                    <div>
                        <div className={'text-lg mb-3 font-semibold'}>
                            Apple Internships
                        </div>
                        <p className={'text-xs'}>Apple hasn't added any jobs yet <br/> Get notified when Apple posts new
                            jobs.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default VerticalTabs;