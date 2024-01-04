import React from "react";
import data from "../utils/data";
import "daisyui/dist/full.css";

export default function JobListing() {
  let count = 1;
  return (
    <div>
      {data.map((job, index) => (
        <div key={job.randomId} className="p-4 bg-white shadow rounded">
          {count++}
          <p className="text-lg font-bold">{job.description}</p>
          <ul className="list-disc pl-6">
            <li className="text-blue-500">{job.skills}</li>
          </ul>
          <p className="italic">
            <u>{job.status ? "Available" : "Not Available"}</u>
          </p>
          <h3 className="text-xl font-semibold">{job.department}</h3>
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
