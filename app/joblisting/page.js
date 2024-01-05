"use client";

import React, { useState } from "react";
import data from "../utils/data";
import "daisyui/dist/full.css";

export default function JobListing() {
  const [visibleJobId, setVisibleJobId] = useState(null);

  const toggleJobDetails = (jobId) => {
    setVisibleJobId(visibleJobId === jobId ? null : jobId);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {data.map((job) => (
        <div
          key={job.randomId}
          className="card bg-base-100 shadow-xl w-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          <div className="internship-card m-4 p-4">
            <div className="start flex gap-4 justify-center">
              {" "}
              <div className="logo grid place-items-center bg-secondary text-white w-14 h-14 rounded-md">
                {" "}
                <img
                  className="h-12 object-cover"
                  src="https://futurespace.vercel.app/resources/FsOutline.png"
                  alt="FutureSpace"
                />{" "}
              </div>{" "}
              <div className="info flex flex-col gap-1">
                {" "}
                <h1 className="text-2xl font-bold">
                  Software Engineering
                </h1>{" "}
                <div className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                  {" "}
                  <p className="text-gray-800 font-bold">FutureSpace</p>|{" "}
                  <p>Nairobi, Kenya</p>|<p>Ksh. 100,000</p>|<p>1 day ago</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="button-container flex gap-3">
              {" "}
              <button className="btn btn-outline">Save</button>{" "}
              <button className="btn btn-primary">Apply</button>{" "}
            </div>
          </div>
          <p
            className="text-center font-bold pb-4 pt-2 px-2 cursor-pointer"
            style={{
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              transition:
                "background-color 0.3s ease, max-height 0.5s ease-out",
              backgroundColor: "transparent",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            onClick={() => toggleJobDetails(job.randomId)}
          >
            description
          </p>

          {visibleJobId === job.randomId && (
            <div className="card-body transition duration-500 ease-in-out">
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
                <p
                  className={`badge ${
                    job.status ? "badge-success" : "badge-error"
                  }`}
                >
                  {job.status ? "Available" : "Not Available"}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
