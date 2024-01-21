"use client";

import React, { useState } from "react";

export default function SamplePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [departments, setDepartments] = useState([]);
  const [overview, setOverview] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="py-3 bg-gunmetal p-5">
      {/* Header */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b-2 border-gray-400 border-opacity-20">
          <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
            <h1 className="text-2xl font-semibold text-gray-100 ">
              Company Info
            </h1>
          </div>
          <div className="">
            <button className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-400 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200">
              Cancel
            </button>
            <button className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200">
              Save
            </button>
          </div>
        </div>
      </div>

      <form className="container px-4 mx-auto">
        {/* Name */}

        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <p className="text-sm font-medium text-gray-100">Name</p>
          </div>
          <div className="flex flex-wrap w-full sm:w-2/3 px-4">
            <div className="w-full sm px-3 mb-3 sm:mb-0">
              <input
                className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                placeholder="Capital Square"
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.length < 3) {
                    setError("Name must be at least 3 characters long");
                  } else {
                    setError("");
                  }
                }}
              />
            </div>
          </div>
          {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <p className="text-sm font-medium text-gray-100">Email Address</p>
          </div>
          <div className="flex flex-wrap w-full sm:w-2/3 px-4">
            <div className="w-full sm px-3 mb-3 sm:mb-0">
              <input
                className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                placeholder="Ex : capitalsquare@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.length < 3) {
                    setError("Email must be at least 3 characters long");
                  } else {
                    setError("");
                  }
                }}
              />
            </div>
          </div>
          {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>

        {/* Photo */}
        <div className="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0">
            <p className="block text-sm font-medium text-gray-100"> Photo </p>
          </div>

          <div className="w-full sm:w-2/3 px-4">
            <div className="flex flex-wrap sm:flex-nowrap max-w-xl">
              <img src="" alt="Company Logo" />
              <div className="w-full py-8 px-4 text-center border-dashed border border-gray-400 hover:border-white focus:border-green-500 rounded-lg">
                <div className="absolute top-0 left-0 h-14 w-14 opacity-0">
                  <img src="" alt="Upload Icon" />
                </div>
                <p>
                  <span className="text-blue-500">Click to upload file</span>{" "}
                  <span className="text-s text-gray-200">
                    or drag and drop file here{" "}
                  </span>
                  <span className="block text-xs text-gray-200">
                    PNG, JPG, GIF up to 10MB{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Departments */}

        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <p className="text-sm font-medium text-gray-100">Departments</p>
          </div>
          <div className="flex flex-wrap w-full sm:w-2/3 px-4">
            <div className="w-full sm px-3 mb-3 sm:mb-0">
              {/* <input
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
            /> */}

              <div>
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Select Departments
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Finance</a>
                    </li>
                    <li>
                      <a>Sales</a>
                    </li>
                    <li>
                      <a>Marketing</a>
                    </li>
                    <li>
                      <a>Software Eng.</a>
                    </li>
                  </ul>
                </div>
                <input
                  className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                  placeholder="Ex : capitalsquare@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <p className="text-sm font-medium text-gray-100">Overview</p>
          </div>
          <div className="flex flex-wrap w-full sm:w-2/3 px-4">
            <div className="w-full sm px-3 mb-3 sm:mb-0">
              <input
                className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                placeholder="Ex : Capital Square is a company that focuses on the development of the latest technology in the world"
                onChange={(e) => {
                  setOverview(e.target.value);
                  if (e.target.value.length < 3) {
                    setError("Overview must be at least 3 characters long");
                  } else {
                    setError("");
                  }
                }}
              />
            </div>
          </div>
          {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>
        {/* Website */}

        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <p className="text-sm font-medium text-gray-100">Website</p>
          </div>
          <div className="flex flex-wrap w-full sm:w-2/3 px-4">
            <div className="w-full sm px-3 mb-3 sm:mb-0">
              <input
                className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                placeholder="Ex : capital-square.com"
              />
            </div>
          </div>
          {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>

        {/* Bio */}
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <p className="text-sm font-medium text-gray-100">Email Address</p>
          </div>
          <div className="flex flex-wrap w-full sm:w-2/3 px-4">
            <div className="w-full sm px-3 mb-3 sm:mb-0">
              <input
                className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 placeholder-opacity-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                placeholder="Ex : capitalsquare@gmail.com"
                onChange={(e) => {
                  setBio(e.target.value);
                  if (e.target.value.length < 3) {
                    setError("Bio must be at least 3 characters long");
                  } else {
                    setError("");
                  }
                }}
              />
            </div>
          </div>
          {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}
