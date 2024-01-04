"use client";

import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
  // Simulate user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Here you would normally check the user's logged-in status
    // For this example, we'll just toggle the status every 5 seconds
    const interval = setInterval(() => {
      setIsLoggedIn((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <body className="flex flex-col">
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex items-center">
            <h1 className="text-6xl font-bold">
              <span className="text-green-400">Intern</span>Link&trade;
            </h1>
          </div>
          <div>
            {isLoggedIn ? (
              <img
                src="path_to_profile_pic.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-400"
              />
            ) : (
              <button className="btn btn-primary">Sign In</button>
            )}
          </div>
        </div>
      </header>
      <div className="container mx-auto p-4 flex-grow">{children}</div>
    </body>
  );
}
