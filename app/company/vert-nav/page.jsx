import React from "react";
import { images } from "../../../assets/";

export default function Profile() {
  return (
    <div className="absolute top-0 right-0 bottom-0 flex flex-col w-1/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-gray-100 border-r overflow-y-auto">
      <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50">
        <div className="h-8 flex p-5">
          <div className="flex flex-wrap">
            <img
              src="https://www.iconfinder.com/icons/2613285/amazon_cloud_computing_commerce_company_electronics_shopping_web_server_icon"
              alt="Company Logo"
            />
          </div>
          <div className="">
            <p className="text-sm font-medium text-gray-100">FutureSpace</p>
          </div>
        </div>
      </div>

      <div className="mb-2 pl-5 text-xs uppercase text-gray-400 font-medium">
        Profile
      </div>

      <div className="px-4 pb-6">
        <div className="flex items-center mt-1 mb-1 pl-3 py-3 pr-4 text-white bg-indigo-500 rounded hover:cursor-pointer">
          <div className="text-gray-200 w-5 h-5">
            <img src="" alt="Icon" />
          </div>
          <div className="ml-3 text-sm font-medium">Dashboard</div>
        </div>

        <div className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-indigo-50 hover:cursor-pointer rounded">
          <div className="text-gray-400 w-5 h-5">
            <img src="" alt="Icon" />
          </div>
          <div className="ml-3 text-sm font-medium">Profile</div>
        </div>

        <div className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-indigo-50 hover:cursor-pointer rounded">
          <div className="text-gray-400 w-5 h-5">
            <img src="" alt="Icon" />
          </div>
          <div className="ml-3 text-sm font-medium">Profile</div>
        </div>
        <div className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-indigo-50 hover:cursor-pointer rounded">
          <div className="text-gray-400 w-5 h-5">
            <img src="" alt="Icon" />
          </div>
          <div className="ml-3 text-sm font-medium">Profile</div>
        </div>
      </div>
    </div>
  );
}
