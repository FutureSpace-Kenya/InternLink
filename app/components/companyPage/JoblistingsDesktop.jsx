import Link from "next/link";
import Pagination from "../../components/Pagination";

const JoblistingsDesktop = ({
    valid_to_display,
    durations,
    setJobListingsFilter,
    pageData2,
    jobListings,
    currentPageJL,
    setCurrentPageJL,
}) => {
    return (
        <div className="hidden lg:block w-full p-4 rounded-md bg-white shadow">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Job Listings</h1>
                <div className="flex gap-x-4 items-center">
                    {valid_to_display && (
                        <>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-sm m-1"
                                >
                                    <i className="text-md fa-solid fa-filter"></i>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    {durations.map((duration) => (
                                        <li key={Math.random().toString(36).substring(2, 15)}>
                                            <button
                                                className="btn btn-sm mt-2"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setJobListingsFilter(
                                                        duration
                                                    );
                                                }}
                                            >
                                                {duration}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                // className="btn btn-sm bg-green-500 text-white"
                                href="/intern/company"
                            >
                                <i className="text-lg fa-solid fa-plus cursor-pointer"></i>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Listings Table */}
            <div className="overflow-x-auto flex flex-col items-center justify-between h-[560px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="whitespace-nowrap">Title</th>
                            <th className="w-38">Department</th>
                            <th>Requirements</th>
                            <th className="w-38">Duration</th>
                            <th className="w-40">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {pageData2.map((listing, index) => (
                            <tr className="cursor-pointer hover:bg-slate-200">
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-y-4">
                                        <div>
                                            <div className="font-bold">
                                                {listing.title}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {listing.description}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>{listing.department}</span>
                                </td>
                                <td>
                                    <span className="text-sm">
                                        {listing.requirements}
                                    </span>
                                </td>
                                <td>
                                    <span className="text-sm">
                                        {listing.duration}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs">
                                            {listing.deadline}
                                        </span>
                                        {valid_to_display && (
                                            <i className="cursor-pointer text-sm text-red-500 fa-solid fa-trash"></i>
                                        )}
                                    </div>
                                </td>
                                {/* <th>
															<button className="btn btn-ghost btn-sm bg-green-300">
																View
															</button>
														</th> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    totalPages={Math.ceil(jobListings.length / 5)}
                    currentPage={currentPageJL}
                    onPageChange={(page) => setCurrentPageJL(page)}
                />
            </div>
        </div>
    );
};

export default JoblistingsDesktop;