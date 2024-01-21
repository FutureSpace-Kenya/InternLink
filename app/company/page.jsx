export default function SamplePage() {
  return (
    <div className="py-3 bg-blue-900">
      {/* Header */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
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
      {/* Name */}

      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
        <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
          <p className="text-sm font-medium text-gray-100">Name</p>
        </div>
        <div className="flex flex-wrap w-full sm:w-2/3 px-4">
          <div className="w-full sm px-3 mb-3 sm:mb-0">
            <input
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
              placeholder="Capital Square"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
        <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
          <p className="text-sm font-medium text-gray-100">Email Address</p>
        </div>
        <div className="flex flex-wrap w-full sm:w-2/3 px-4">
          <div className="w-full sm px-3 mb-3 sm:mb-0">
            <input
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
              placeholder="Ex : capitalsquare@gmail.com"
            />
          </div>
        </div>
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
                <span className="text-blue-500">Click to upload file</span> or
                drag and drop file here
                <span className="block text-xs text-gray-400">
                  PNG, JPG, GIF up to 10MB{" "}
                </span>
              </p>
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
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
              placeholder="Ex : Capital Square is a company that focuses on the development of the latest technology in the world"
            />
          </div>
        </div>
      </div>
      {/* Website */}

      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
        <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
          <p className="text-sm font-medium text-gray-100">Website</p>
        </div>
        <div className="flex flex-wrap w-full sm:w-2/3 px-4">
          <div className="w-full sm px-3 mb-3 sm:mb-0">
            <input
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
              placeholder="Ex : capital-square.com"
            />
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
        <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
          <p className="text-sm font-medium text-gray-100">Email Address</p>
        </div>
        <div className="flex flex-wrap w-full sm:w-2/3 px-4">
          <div className="w-full sm px-3 mb-3 sm:mb-0">
            <input
              className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
              placeholder="Ex : capitalsquare@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
