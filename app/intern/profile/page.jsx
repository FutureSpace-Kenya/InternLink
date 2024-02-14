"use client";
import Notification from "/app/Notification";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import NavBar from "/app/components/NavBar";

const InternProfile = () => {

  const { data: session } = useSession();
  const [intern, setIntern] = useState({});

  useEffect(() => {
    document.title = "Edit Profile | InternLink™";
    if (session) {
      fetchInternData().then(r => {
        console.log(r);
      });
    }
  }, [session]);

  if (!session) {
    return (
      <div className="min-h-screen grid place-items-center w-full">
        <span className="loading loading-ring loading-lg"></span>
        <span className="absolute w-96 top-5 right-0">
          <Notification notifications={[{ type: "loading", content: "Loading sign in session" }]} />
        </span>
      </div>
    );
  }

  async function fetchInternData() {
    try {
      const response = await fetch(`/api/users/${session.user.email}`);
      const data = await response.json();
      setIntern(data);
      console.log(data, "for user id: ", session.user.email);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="">
        <div className="w-full bg-green-100 grid grid-cols-1 place-items-center h-72 gap-6">
          <div className="landing-page">
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternProfile;