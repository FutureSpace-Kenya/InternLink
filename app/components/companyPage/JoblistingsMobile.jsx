import Link from "next/link";

const JoblistingsMobile = ({ valid_to_display, jobListings }) => {
    return (
        <div className="lg:hidden rounded-md bg-white shadow p-5 mt-10">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Job Listings</h1>
                {valid_to_display && (
                    <Link
                        // className="btn btn-sm bg-green-500 text-white"
                        href="/intern/company"
                    >
                        <i className="text-lg fa-solid fa-plus cursor-pointer"></i>
                    </Link>
                )}
            </div>
            <div className="flex flex-wrap gap-2">
                {jobListings.map((listing, index) => (
                    <div className="card w-full md:max-w-xs md:mr-5 bg-slate-50 shadow-md mb-1">
                        <div className="card-body">
                            <div className="card-title flex items-start justify-between">
                                <div>
                                    <p className="font-bold">{listing.title}</p>
                                    <span className="text-xs">
                                        {listing.duration}
                                    </span>
                                </div>
                                {valid_to_display && (
                                    <i className="cursor-pointer text-sm text-red-500 fa-solid fa-trash mt-2"></i>
                                )}
                            </div>
                            <div className="flex gap-3 my-2">
                                <i className="text-green-500 fa-solid fa-building-user"></i>
                                <span className="text-green-500 text-sm">
                                    {listing.department}
                                </span>
                            </div>
                            <p className="text-sm hidden md:block">
                                {listing.description}
                            </p>
                            <div>
                                <p className="text-base">
                                    {listing.requirements}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JoblistingsMobile;
