'use client'
import React, {useEffect, useState} from "react";
import NavBar from "app/components/NavBar";
import VerticalTabs from "app/components/tabs/VerticalTabs";
import Loading from "/app/loading";
import Notification from "/app/Notification";

const Company = () => {

    const [company, setCompany] = useState({});

    useEffect(() => {

        document.title = "Loading Company"
        const id = new URLSearchParams(window.location.search).get("id");
        fetch(`/api/organizations/${id}`)
            .then(response => response.json())
            .then(data => {
                setCompany(data.organization)
                document.title = data.organization.name
            })
            .catch(error => {
                console.error(error)
            })

    }, []);


    //if company is empty loading
    if (!company || Object.keys(company).length === 0 || company.departments === undefined) {
        return (
            <div className="overflow-hidden bg-green-100 min-h-screen">
                <NavBar/>
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
        <div className="overflow-hidden bg-green-100 min-h-screen">
            <NavBar/>
            <div className={`bg-white p-4 sm:p-6 md:p-6`}>

                <div
                    className="dashboard flex flex-col sm:flex-row sm:items-center border-b pb-10 justify-between gap-4">
                    <div className="company flex gap-4 items-end">

                        <div
                            className="logo flex overflow-hidden items-center justify-center ring-1 ring-green-500 shadow-md text-secondary company-logo bg-gray-700 rounded-md logo-hover">
                            <img className="h-20 object-cover" src={company.logo} alt={company.name} />
                        </div>

                        <div className="info">
                            <div className="name text-2xl font-semibold">
                                {company.name}
                            </div>
                            <div className="description text-sm">
                                {company.description}
                            </div>
                        </div>
                    </div>

                    <div className="actions flex gap-2">
                        <button data-tip="Share Apple"
                                className="btn btn-outline rounded-md btn-sm tooltip btn-secondary">
                            <i className="fa-solid fa-share-nodes"></i>
                        </button>

                        <button data-tip="Follow Apple"
                                className="btn btn-outline rounded-md btn-sm tooltip btn-secondary">
                            <i className="fa-solid fa-plus"></i>
                            &nbsp;Follow
                        </button>

                    </div>
                </div>

                <div className="flex gap-4 flex-col md:flex-row">

                    <VerticalTabs company={company}/>

                    <div className="image mt-4 rounded-md w-full md:w-7/12">
                        <img className="rounded-md" src={company.image}
                             alt=""/>
                    </div>

                    <div className={'mt-4 rounded-md w-full md:w-4/12 border p-4'}>
                        <div className="title text-gray-400 font-semibold uppercase text-[10px]">
                            About {company.name}
                        </div>
                        <div className="content text-sm">
                            Website: <a href="https://www.apple.com">
                            {company.website}
                        </a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;