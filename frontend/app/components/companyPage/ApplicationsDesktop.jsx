import Pagination from "app/components/Pagination";
import Link from "next/link";
import PropTypes from "prop-types";

const ApplicationsDesktop = ({
  valid_to_display,
  setApplicationFilter,
  statuses,
  pageData,
  currentPage,
  setCurrentPage,
  applications,
  getStatusBadge,
}) => {
  return (
    <div className="hidden lg:block w-full p-5 rounded-md bg-white shadow mb-10">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Applications</h1>
        <Link
          className="btn btn-primary btn-sm"
          style={{ display: "none" }}
          href="/intern/company/"
        >
          View
        </Link>
        {valid_to_display && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              <i className="text-md fa-solid fa-filter"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {statuses.map((status, index) => (
                <li key={index}>
                  <button
                    className="btn btn-sm mt-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setApplicationFilter(status);
                    }}
                  >
                    {status}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Applications Table */}
      <div className="overflow-x-auto flex flex-col items-center justify-between h-[438px]">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              {valid_to_display && <th>Status</th>}
              <th>Position</th>
              <th>Department</th>
              {valid_to_display && <th>Actions</th>}
            </tr>
          </thead>
          {/* max-h-[250px] min-h-fit */}
          <tbody className="">
            {pageData.map((application, index) => (
              <tr key={index} className="hover:bg-slate-200 h-4">
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div
                      className="avatar"
                      style={{
                        display: "none",
                      }}
                    >
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{application.name}</div>
                      <div className="text-sm opacity-50">
                        {application.submissionDate}
                      </div>
                    </div>
                  </div>
                </td>
                {valid_to_display && (
                  <td>{getStatusBadge(application.status)}</td>
                )}
                <td>{application.position}</td>
                <td>{application.department}</td>
                {valid_to_display && (
                  <th>
                    <Link href={`/intern/company/applicant`}>
                      <i className="cursor-pointer text-lg fa-solid fa-pen-to-square"></i>
                    </Link>
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalPages={Math.ceil(applications.length / 5)}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ApplicationsDesktop;

ApplicationsDesktop.propTypes = {
  valid_to_display: PropTypes.bool,
  setApplicationFilter: PropTypes.func,
  statuses: PropTypes.array,
  pageData: PropTypes.object,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  applications: PropTypes.array,
  getStatusBadge: PropTypes.func,
};
