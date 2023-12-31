import React from "react";
import data from "../utils/data";

export default function JobListing() {
  let count = 1;
  return (
    <>
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
    </>
  );
}
// description,
// skills,
// status,
// departmentId
