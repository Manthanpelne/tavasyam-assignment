import React, { useState } from "react";
import Sidebar from "./Sidebar";


 
  const chartData = [
  { day: 'Mon', workout: 70, calories: 50, steps: 95 },
  { day: 'Tue', workout: 40, calories: 75, steps: 55 },
  { day: 'Wed', workout: 85, calories: 45, steps: 75 },
  { day: 'Thu', workout: 50, calories: 65, steps: 40 },
  { day: 'Fri', workout: 75, calories: 30, steps: 60 },
  { day: 'Sat', workout: 55, calories: 80, steps: 65 },
  { day: 'Sun', workout: 65, calories: 40, steps: 70 },
];


const foodLog = [
  { food: 'Burrito', meal: 'Pizza Burger', calories: 'Receiving', priorities: '01:00 AM', carbs: '20 gm' },
  { food: 'Burger', meal: 'Pizza Burger', calories: 'Receiving', priorities: '01:00 AM', carbs: '20 gm' },
];


const BarChart = ({ data }) => {
  
  const maxVal = 100;

  const BarGroup = ({ day, values }) => {
    return (
      <div className="flex flex-col items-center w-full px-1">
        <div className="flex justify-center items-end h-32 w-full space-x-2 mb-2">
          {/* Workout Bar */}
          <div
            className="w-2 bg-[#22D3EE] rounded-t-lg transition-all duration-500"
            style={{ height: `${(values.workout / maxVal) * 100}%` }}
            title={`Workout: ${values.workout}%`}
          ></div>
          {/* Calories Bar */}
          <div
            className="w-2 bg-[#FB923C] rounded-t-lg transition-all duration-500"
            style={{ height: `${(values.calories / maxVal) * 100}%` }}
            title={`Calories: ${values.calories}%`}
          ></div>
          {/* Steps Bar */}
          <div
            className="w-2 bg-[#A78BFA] rounded-t-lg transition-all duration-500"
            style={{ height: `${(values.steps / maxVal) * 100}%` }}
            title={`Steps: ${values.steps}%`}
          ></div>
        </div>
        <span className="text-xs text-gray-500 font-medium">{day}</span>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-black/70">Goal Progress</h3>
        <select className="text-sm border rounded-lg px-3 py-2 text-gray-600">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="flex h-52 relative">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between text-xs text-gray-500 pr-3 border-r border-gray-100">
          <span>100%</span>
          <span>80%</span>
          <span>60%</span>
          <span>40%</span>
          <span>20%</span>
          <span>0%</span>
        </div>

        {/* Chart Area */}
        <div className="flex-1 flex justify-between items-end pl-3">
          {data.map((item) => (
            <BarGroup key={item.day} day={item.day} values={item} />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex space-x-4 mt-7 ml-14 text-xs font-medium text-gray-600">
        <span className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] mr-1"></span> Workout
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#FB923C] mr-1"></span> Calories
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#A78BFA] mr-1"></span> Steps
        </span>
      </div>
    </div>
  );
};


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
        <header className="flex shadow-sm justify-between bg-white items-center py-4.5 px-4">
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
          <div className=" flex justify-between">
            <div className=" space-y-6 min-w-[786px]">
              
              <div className="relative p-6 text-white rounded-xl shadow-2xl overflow-hidden w-full min-h-40">
                {/* 1. Background Image Container with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img
                    src="https://i.pinimg.com/1200x/4d/44/6a/4d446ab27f9e036dc7ae2433ec0931a3.jpg"
                    alt="Person exercising"
                    className="absolute right-0 top-0 h-full w-1/2 object-cover object-center hidden md:block"
                  />
        
                  <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-orange-500 to-transparent"></div>
                </div>

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

              <div className="grid grid-cols-3 gap-4 w-full">
                 <div className="bg-[#06B6D4] flex p-5 text-white gap-3 rounded-lg w-full min-h-[168px]">
                    <span className="p-3 mt-1 bg-black/20 h-max"> <svg
                className="w-4 h-4"
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
                     </svg></span>
                     <div>
                         <h2 className="font-semibold">Calories</h2>
                         <p className="text-xs pt-1">1800 kcl</p>
                     </div>
                 </div>
                 <div className="bg-orange-500 flex p-5 text-white gap-3 rounded-lg w-full min-h-[168px]">
                    <span className="p-3 mt-1 bg-black/20 h-max"> <svg
                className="w-4 h-4"
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
                     </svg></span>
                     <div>
                         <h2>Calories</h2>
                         <p>1800 kcl</p>
                     </div>
                 </div>
                   <div className="bg-[#8B5CF6] flex p-5 text-white gap-3 rounded-lg w-full min-h-[168px]">
                    <span className="p-3 mt-1 bg-black/20 h-max"> <svg
                className="w-4 h-4"
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
                     </svg></span>
                     <div>
                         <h2>Calories</h2>
                         <p>1800 kcl</p>
                     </div>
                 </div>
              </div>

              <div className="min-h-[336px] ">
                  <BarChart data={chartData}/>
              </div>

              <div className=" min-h-[226px] p-2 rounded-3xl shadow-lg overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    {['Food', 'Meal', 'Calories', 'Priorities', 'Carbs'].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-sm font-semibold text-black/70 tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {foodLog.map((item, index) => (
                    <tr key={index} className="">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                        <img
                          src="https://placehold.co/30x30/f0f0f0/333333?text=🍔"
                          alt={item.food}
                          className="w-7 h-7 rounded-full mr-3"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                        {item.food}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.meal}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.calories}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.priorities}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.carbs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
