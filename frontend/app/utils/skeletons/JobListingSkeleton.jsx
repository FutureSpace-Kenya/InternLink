import React from "react";

export default function JobListingSkeleton() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-24 animate-pulse">
      {/* Banner Placeholder */}
      <div className="w-full h-64 bg-gray-300 rounded mb-4"></div>

      {/* Tabs Placeholder */}
      <ul className="flex w-full justify-center mb-4">
        <li className="m-2">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </li>
        <li className="m-2">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </li>
        <li className="m-2">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </li>
        <li className="m-2">
          <div className="h-6 bg-gray-300 rounded w-20"></div>
        </li>
      </ul>

      {/* Job Cards Placeholder */}
      <div className="w-full flex flex-col items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl w-5/6 mb-4 animate-pulse"
          >
            <div className="p-4 flex gap-4">
              <div className="h-14 w-14 bg-gray-300 rounded-md"></div>
              <div className="flex-grow">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <div className="h-10 bg-gray-300 rounded w-24"></div>
              <div className="h-10 bg-gray-300 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
