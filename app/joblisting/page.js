import React from "react";
import data from "../utils/data";
import "daisyui/dist/full.css";

export default function JobListing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((job) => (
        <div key={job.randomId} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{job.title}</h2>
            <p className="text-lg">{job.description}</p>
            <div className="badge badge-secondary">{job.department}</div>
            <div className="pt-2">
              <h3 className="font-semibold">Skills Required:</h3>
              <ul className="list-disc pl-4">
                {job.skills.map((skill, index) => (
                  <li key={index} className="text-blue-500">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end">
              <p
                className={`badge ${
                  job.status ? "badge-success" : "badge-error"
                }`}
              >
                {job.status ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export function InternLinkLogo() {
  return (
    <div className="flex" style={{ maxHeight: "50px" }}>
      <div className="w-fit relative flex flex-col items-center cursor-pointer">
        <h1 className="text-6xl font-bold">
          <span className="text-green-400">Intern</span>
          Link&trade;
        </h1>
        <div className="absolute top-[55px] right-0 mb-4 text-xs font-medium text-orange-800 flex flex-col items-end"></div>
      </div>
    </div>
  );
}
