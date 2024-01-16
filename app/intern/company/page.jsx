'use client'
import React, {useState} from "react";
import NavBar from "app/components/NavBar";
import VerticalTabs from "app/components/tabs/VerticalTabs";

const Company = () => {

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

                    <VerticalTabs />

                    <div className="image mt-4 rounded-md w-full md:w-7/12">
                        <img className="rounded-md" src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                             alt=""/>
                    </div>

                    <div className={'mt-4 rounded-md w-full md:w-4/12 border p-4'}>
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