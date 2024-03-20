import React from "react";

export default function HomeSkeleton() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 animate-pulse">
      <div className="flex relative flex-col items-center">
        <div className="w-fit relative flex flex-col items-center">
          <div className="h-12 bg-gray-300 rounded w-3/4"></div>{" "}
          {/* Placeholder for title */}
          <div className="absolute top-[55px] right-0 mb-4 h-4 bg-gray-300 rounded w-1/4"></div>{" "}
          {/* Placeholder for subtitle */}
        </div>
        <p className="mt-4 bg-gray-300 h-6 rounded w-1/2"></p>{" "}
        {/* Placeholder for description */}
        <div className="flex space-x-4 mt-8">
          {/* Placeholder for buttons */}
          <div className="btn bg-gray-300 h-10 w-24 rounded"></div>
          <div className="btn bg-gray-300 h-10 w-24 rounded"></div>
        </div>
      </div>
    </main>
  );
}
