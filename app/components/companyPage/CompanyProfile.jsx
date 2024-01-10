import CompanyStats from "../CompanyStats";

const CompanyProfile = ({ company, valid_to_display }) => {
    return (
        <div className="w-full p-5 ">
            <div className="p-5 rounded-md bg-white shadow">
                <div className="flex flex-col items-center gap-4 mb-4 mt-5">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">{company.name}</h1>
                </div>
                {/* Company details */}
                <div className="flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 gap-4 md:flex md:items-center md:w-full md:justify-center">
                        <div className="mt-2 flex items-center gap-2">
                            <i className="text-sm fa-solid fa-location-dot"></i>
                            <p className="text-sm">{company.location}</p>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <i className="text-sm fa-solid fa-building"></i>
                            <p className="text-sm">{company.size}</p>
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
                    {valid_to_display && (
                        <button className="btn w-full bg-green-500 text-white">
                            Update Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;
