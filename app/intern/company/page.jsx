'use client'
import React, {useState} from "react";
import NavBar from "app/components/NavBar";
import VerticalTabs from "app/components/tabs/VerticalTabs";

const Company = () => {

    const tabs = [
        {
            id: "1",
            title: "Apple Careers",
            icon: "<i class=\"fa-solid fa-mountain\"></i>",
            label: "Overview",
            content: "Apple designs Macs, the best personal computers in the world, along with OS X, iLife, iWork and professional software. Apple leads the digital music revolution with its iPods and iTunes online store. Apple has reinvented the mobile phone with its revolutionary iPhone and App store, and is defining the future of mobile media and computing devices with iPad."
        },
        {
            id: "2",
            title: "Jobs at Apple",
            icon: "<i class=\"fa-brands fa-servicestack\"></i>",
            label: "Internships",
            content: "Apple hasn't added any jobs yet <br> Get notified when Apple posts new jobs."
        },
    ];

    return (
        <div className="overflow-hidden bg-green-100 min-h-screen">
            <NavBar/>

            <div className={`bg-white p-4 sm:p-6 md:p-6`}>

                <div
                    className="dashboard flex flex-col sm:flex-row sm:items-center border-b pb-10 justify-between gap-4">
                    <div className="company flex gap-4 items-end">

                        <div
                            className="logo flex items-center justify-center ring-1 ring-green-500 shadow-md text-secondary company-logo rounded-md logo-hover">
                            <i
                                className={`fa-brands fa-apple text-5xl`}
                            ></i>
                        </div>

                        <div className="info">
                            <div className="name text-2xl font-semibold">
                                Apple
                            </div>
                            <div className="description text-sm">
                                To make a contribution to the world by making tools for the mind that advance humankind.
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
                    <VerticalTabs tabs={tabs}/>
                    <div className={'mt-4 rounded-md w-full md:w-3/12 border p-4'}>
                        <div className="title text-gray-400 font-semibold uppercase text-[10px]">
                            About Apple
                        </div>
                        <div className="content text-sm">
                            Website: <a href="https://www.apple.com">https://www.apple.com</a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;