"use client";
import { useSession } from "next-auth/react";
import NavBar from "../../../components/NavBar";

const ApplicantDetails = () => {
    const { data: session } = useSession();

    if (!session)
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );

    return (
        <div className="bg-green-100">
            <NavBar />
            <div className="container rounded-md shadow bg-white mx-auto w-2/3 mt-5 p-10">
                <div className="">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-2xl font-bold  leading-7 text-gray-900">
                            Applicant Information
                        </h3>
                        <p className="mt-1 max-w-2xl leading-6 text-base font-semibold text-gray-500">
                            Personal details and application.
                        </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Margot Foster
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Application for
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Backend Developer
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    margotfoster@example.com
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Salary expectation
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    $120,000
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Fugiat ipsum ipsum deserunt culpa aute sint
                                    do nostrud anim incididunt cillum culpa
                                    consequat. Excepteur qui ipsum aliquip
                                    consequat sint. Sit id mollit nulla mollit
                                    nostrud in ea officia proident. Irure
                                    nostrud pariatur mollit ad adipisicing
                                    reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Attachments
                                </dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul
                                        role="list"
                                        className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                    >
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <i class="h-5 w-5 flex-shrink-0 text-gray-400 fa-solid fa-paperclip"></i>
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        resume_back_end_developer.pdf
                                                    </span>
                                                    <span className="flex-shrink-0 text-gray-400">
                                                        2.4mb
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <i class="h-5 w-5 flex-shrink-0 text-gray-400 fa-solid fa-paperclip"></i>
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        coverletter_back_end_developer.pdf
                                                    </span>
                                                    <span className="flex-shrink-0 text-gray-400">
                                                        4.5mb
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href="#"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt></dt>
                                <dd className="flex gap-4">
                                    <button className="btn btn-ghost bg-green-500 text-white w-full">
                                        Accept
                                    </button>
                                    <button className="btn btn-ghost  bg-red-500 text-white w-full">
                                        Reject
                                    </button>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantDetails;
