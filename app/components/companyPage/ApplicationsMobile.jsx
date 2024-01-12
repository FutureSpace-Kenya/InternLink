import Link from "next/link";

const ApplicationsMobile = ({
    applications,
    valid_to_display,
    getStatusBadge,
}) => {
    return (
        <div className="lg:hidden rounded-md bg-white shadow p-5">
            <h1 className="text-2xl font-bold mb-5">Applications</h1>
            <div className="flex flex-wrap gap-2">
                {applications.map((application, index) => (
                    <div className="card w-full md:max-w-xs md:mr-5 bg-slate-50 shadow-md mb-1">
                        <div className="card-body">
                            <div className="card-title flex items-start justify-between">
                                <div>
                                    <p className="font-bold">
                                        {application.name}
                                    </p>
                                    <span className="text-xs">
                                        {application.submissionDate}
                                    </span>
                                </div>
                                {valid_to_display && (
                                    <Link href={`/intern/company/applicant`}>
                                        <i className="cursor-pointer text-lg fa-solid fa-pen-to-square"></i>
                                    </Link>
                                )}
                            </div>
                            {valid_to_display && (
                                <span className="mt-1">
                                    {getStatusBadge(application.status)}
                                </span>
                            )}
                            {valid_to_display ? (
                                // Shown when the user is unauthenticated
                                <div className="flex gap-2 justify-between mt-3">
                                    <div className="flex gap-3">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="text-sm">
                                            {application.position}
                                        </span>
                                    </div>
                                    <div className="flex gap-3">
                                        <i className="fa-solid fa-building-user"></i>
                                        <span className="text-sm">
                                            {application.department}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                // Shown when the user is authenticated
                                <div className="gap-2 mt-3">
                                    <div className="flex gap-3">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="text-sm">
                                            {application.position}
                                        </span>
                                    </div>
                                    <div className="flex gap-3 mt-4">
                                        <i className="fa-solid fa-building-user"></i>
                                        <span className="text-sm">
                                            {application.department}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationsMobile;
