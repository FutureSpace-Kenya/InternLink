"use client";

import React from "react";
import data from "../utils/data";
import "daisyui/dist/full.css";

export default function JobListing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data.map((job) => (
        <div key={job.randomId} className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={job.image}
              alt="Role image"
              className="rounded-xl border-solid border-3 border-[#B5B5B1]"
            />
            <p className="text-2xl"> Role Title</p>{" "}
            {/* Assuming the base size is 1xl, 2xl will double the size */}
          </figure>

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
            <div className="flex justify-between items-center mt-4">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mr-4">Interested?</span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
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
