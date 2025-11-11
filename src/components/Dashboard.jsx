import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="min-h-screen bg-[#F1F5F9] font-sans flex">
      {/* sidebar toggling for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`
        w-60 bg-white shadow-2xl p-6 flex flex-col justify-between fixed h-full transition-transform duration-300 z-50
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:shadow-xl
      `}
      >
        <Sidebar />
      </div>

      {/* main page */}

      <section className="flex-1 lg:ml-60 ">
        <header className="flex shadow-sm justify-between bg-white items-center   py-4.5 px-4">
          <div className="text-xs w-1/2 font-bold text-black/40">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 mr-3 rounded-full bg-white text-gray-700 shadow-md"
            >
              {isSidebarOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
            Good Morning
            <p className="text-lg font-medium text-gray-900 ">Welcome Back!</p>
          </div>
          <div className="flex items-center  space-x-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 max-w-[500px] py-2 border placeholder:text-gray-700 border-gray-200 rounded-md bg-[#F8FAFB] focus:ring-orange-500 focus:border-orange-500 text-sm"
              />
              <svg
                className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
            </svg>
            <img
              src="https://placehold.co/40x40/FF7B40/ffffff?text=U"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover shadow-md"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </header>

        <section className="p-4 md:p-10">
          <div className="border flex justify-between">
            <div className="border min-w-[786px]">
              <div className="relative p-6 text-white rounded-xl shadow-2xl overflow-hidden w-full min-h-40">
                {/* 1. Background Image Container with Gradient Overlay */}
                <div className="absolute inset-0">
                  {/* Image contained on the right (adjust w-1/2 or w-2/5 based on desired coverage) */}
                  <img
                    src="https://i.pinimg.com/1200x/4d/44/6a/4d446ab27f9e036dc7ae2433ec0931a3.jpg"
                    alt="Person exercising"
                    className="absolute right-0 top-0 h-full w-1/2 object-cover object-center hidden md:block"
                  />
                  {/* Gradient Overlay: 
            This applies a linear gradient from orange on the left to transparent (or a darker orange) over the image on the right.
            'via-orange-600' is key for a consistent orange look where the text is.
            'to-transparent' ensures the image shows through clearly on the far right.
        */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-600/90 to-transparent"></div>
                </div>

                {/* 2. Content (Text) - Ensure it's above the background image and gradient */}
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    Track Your Daily Activities
                  </h2>
                  <p className="mt-2 text-sm opacity-90 max-w-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[318px] border"></div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
