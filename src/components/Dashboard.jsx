import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const chartData = [
  { day: "Mon", workout: 70, calories: 50, steps: 95 },
  { day: "Tue", workout: 40, calories: 75, steps: 55 },
  { day: "Wed", workout: 85, calories: 45, steps: 75 },
  { day: "Thu", workout: 50, calories: 65, steps: 40 },
  { day: "Fri", workout: 75, calories: 30, steps: 60 },
  { day: "Sat", workout: 55, calories: 80, steps: 65 },
  { day: "Sun", workout: 65, calories: 40, steps: 70 },
];

const foodLog = [
  {
    food: "Burrito",
    meal: "Pizza Burger",
    calories: "Receiving",
    priorities: "01:00 AM",
    carbs: "20 gm",
  },
  {
    food: "Burger",
    meal: "Pizza Burger",
    calories: "Receiving",
    priorities: "01:00 AM",
    carbs: "20 gm",
  },
];

const BarChart = ({ data }) => {
  const maxVal = 100;

  const BarGroup = ({ day, values }) => {
    return (
      <div className="flex flex-col items-center w-full px-1">
        <div className="flex justify-center items-end h-[147px] w-full space-x-2 mb-2">
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
    <div className="bg-white py-6 px-8 rounded-xl shadow-lg">
      <div className="min-h-[288px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-black/70">Goal Progress</h3>
        <select className="text-sm border border-[#b4b2b2] rounded-lg px-5 py-2 text-gray-600">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="flex min-h-[208px] relative">
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
       <div className="flex space-x-7 mt-7 ml-14 text-xs font-medium text-gray-600">
        <span className="flex gap-1 items-center">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] mr-1"></span>{" "}
          Workout
        </span>
        <span className="flex gap-1 items-center">
          <span className="w-2 h-2 rounded-full bg-[#FB923C] mr-1"></span>{" "}
          Calories
        </span>
        <span className="flex gap-1 items-center">
          <span className="w-2 h-2 rounded-full bg-[#A78BFA] mr-1"></span> Steps
        </span>
      </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) { // 768px is Tailwind's 'md' breakpoint
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  return (
    <section className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay (Darkens screen when sidebar is open) */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar - Proper Responsive Implementation */}
      <div
        className={`
          
          fixed top-0 left-0 w-72 lg:w-60 h-[1024px] bg-white shadow-2xl p-6 flex flex-col justify-between 
          transition-transform duration-300 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:shadow-xl  md:border-r md:border-gray-200
        `}
      >
        <Sidebar />
      </div>

      {/* main page */}

      <section className="flex-1">
        <header className="flex md:max-w-[1200px] h-[88px] justify-between  gap-4 shadow-sm  bg-white items-center py-4.5 px-4">
          <div className="text-xs w-full md:min-w-[295px] font-bold text-black/40">
            <h1>Good Morning</h1>
            <p className="text-lg font-medium text-gray-900 ">Welcome Back!</p>
          </div>

            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 lg:min-w-[689px] placeholder:text-gray-700 border-gray-200 rounded-md bg-[#F8FAFB] focus:ring-orange-500 focus:border-orange-500 text-sm"
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

          <div className="flex w-full items-center gap-4 justify-end lg:justify-start">
            <svg
            className=" opacity-50 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" opacity-50 w-6"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
            </svg>
            <img
              src="Avatar.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover shadow-md"
              onError={(e) => (e.target.style.display = "none")}
            /> 
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 mr-3 rounded-full bg-white text-gray-700 shadow-md"
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
          </div>

        </header>

        <section className="p-4 md:p-8">
          <div className=" flex flex-col lg:flex-row gap-8">
            <div className=" space-y-6 md:min-w-[786px] min-h-[959px]">

              <div className="relative p-6 text-white rounded-xl shadow-2xl overflow-hidden w-full min-h-40">
                <div className="absolute inset-0">
                  <img
                    src="/ana.png"
                    alt="Person exercising"
                    className="absolute right-0 top-0 h-full w-1/2 object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-orange-500 to-transparent"></div>
                </div>

                <div className="relative z-10 w-1/2">
                  <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                    Track Your Daily Activities
                  </h2>
                  <p className="p-1 text-sm opacity-70 max-w-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore. Lorem, ipsum.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 w-full">
                <div className="relative w-full min-h-[283px] lg:min-h-[168px] rounded-lg overflow-hidden">
                  <div
                    className="absolute z-10 inset-0 bg-cover bg-bottom top-[50px]"
                    style={{ backgroundImage: "url('/v1.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-[#06B6D4] "></div>

                  <div className="relative flex p-5 text-white gap-3 h-full">
                    <span className="p-2 mt-1 rounded-md bg-black/20 h-max">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 opacity-55"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M14 13.6c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6zm26 0c0-1.436-1.343-2.6-3-2.6s-3 1.164-3 2.6v20.8c0 1.436 1.343 2.6 3 2.6s3-1.164 3-2.6zM8 18.667C8 17.194 6.657 16 5 16s-3 1.194-3 2.667v10.666C2 30.806 3.343 32 5 32s3-1.194 3-2.667zm38 0C46 17.194 44.657 16 43 16s-3 1.194-3 2.667v10.666C40 30.806 41.343 32 43 32s3-1.194 3-2.667zM14 27h20v-6H14z"
                        />
                      </svg>
                    </span>
                    <div>
                      <h2 className="font-semibold">Workout</h2>
                      <p className="text-xs pt-1 opacity-75">4 hours</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full min-h-[283px] lg:min-h-[168px] rounded-lg overflow-hidden">
                  <div
                    className="absolute z-10 inset-0 bg-cover bg-bottom top-[60px]"
                    style={{ backgroundImage: "url('/v2.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-[#F97316] "></div>

                  <div className="relative flex p-5 text-white gap-3 h-full">
                    <span className="p-1 rounded-md mt-1 bg-black/20 h-max">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" stroke-width="1">
                          <path d="M14.5 10c0-.791 1.053-1.001 1.332-.26C16.508 11.53 17 13.134 17 14a5 5 0 0 1-10 0c0-.93.568-2.711 1.322-4.663c.975-2.528 1.463-3.792 2.066-3.86c.192-.022.403.017.575.107c.537.28.537 1.659.537 4.416a1.5 1.5 0 0 0 3 0Z" />
                          <path d="m11 19l-.263-.657a3.4 3.4 0 0 1 .503-3.393a.973.973 0 0 1 1.52 0c.766.958.958 2.254.503 3.393L13 19" />
                        </g>
                      </svg>
                    </span>
                    <div>
                      <h2 className="font-semibold">Calories</h2>
                      <p className="text-xs pt-1 opacity-75">1800 kcl</p>
                    </div>
                  </div>
                </div>

                <div className="relative w-full min-h-[283px] lg:min-h-[168px] rounded-lg overflow-hidden">
                  <div
                    className="absolute z-10 inset-0 bg-cover bg-bottom top-[38px]"
                    style={{ backgroundImage: "url('/v3.png')" }}
                  ></div>
                  <div className="absolute inset-0 bg-[#8B5CF6] "></div>

                  <div className="relative flex p-5 text-white gap-3 h-full">
                    <span className="p-3 rounded-md mt-1 bg-black/20 h-max">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-miterlimit="10"
                          stroke-width="32"
                          d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41c-50.65 7.49-71.52-26.44-80.33-85.06c-11.85-78.88 16-127.94 55.71-131.1c36.14-2.87 68.71 60.14 77.53 118.75Zm23.65 162.69c3.13 33.28-14.86 64.34-42 69.66c-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21s55.99-20.4 59.77 19.74ZM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41c50.66 7.49 71.52-26.44 80.33-85.06c11.86-78.89-16-128.22-55.7-131.1c-36.4-2.64-68.71 60.13-77.53 118.75Zm-23.65 162.7c-3.13 33.27 14.86 64.34 42 69.66c27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22s-55.99-20.4-59.77 19.75Z"
                        />
                      </svg>
                    </span>
                    <div>
                      <h2 className="font-semibold">Steps</h2>
                      <p className="text-xs pt-1 opacity-75">2200 steps</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-h-[336px] ">
                <BarChart data={chartData} />
              </div>

              <div className="min-h-[226px] space-y-4">
                <ul className="flex items-center justify-between ">
                  <li className="px-2">Food</li>
                  <li className="px-10">Meal</li>
                  <li>Calories</li>
                  <li>Priorities</li>
                  <li>Carbs</li>
                </ul>
                <ul className="flex items-center text-sm text-black/70 justify-between p-3 bg-white shadow-sm">
                  <li className="flex text-black/80 font-semibold  items-center gap-2">
                    {" "}
                    <span className="p-0.5 rounded-full bg-[#FFEDD5]">
                      <img src="./buritto 1.png" className="w-6" alt="" />
                    </span>{" "}
                    Buritto
                  </li>
                  <li>Pizza Burger</li>
                  <li>Receiving</li>
                  <li>01:00 AM</li>
                  <li>20 gm</li>
                </ul>

                <ul className="flex items-center text-black/70 text-sm justify-between p-3 bg-white shadow-sm">
                  <li className="flex text-black/80 font-semibold items-center gap-2">
                    {" "}
                    <span className="p-0.5 rounded-full bg-[#FFEDD5]">
                    <img src="/burger 1.png" className="w-6" alt="" />
                    </span>{" "}
                    Burger
                  </li>
                  <li>Pizza Burger</li>
                  <li>Receiving</li>
                  <li>01:00 AM</li>
                  <li>20 gm</li>
                </ul>
              </div>
            </div>

            <div className=" lg:max-w-[318px] flex gap-10 lg:gap-0 flex-col">
              <div className="max-h-[383px] min-w-[318px]">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-black/70 tracking-wide text-lg font-medium">
                    My Schedule
                  </h2>
                  <p className="text-sm text-[#F97316] flex items-center ">View All 
                    <img src="/Arrow-orange.png" className="w-7" alt="" />
                     </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="mb-1 ">Monday</h3>
                    <div className="p-1 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img className="w-[34.57px] h-8" src="/image 96.png" alt="" />
                        <span className="space-y-1">
                          <p className="text-sm ">Stretch</p>
                          <p className="text-xs text-black/50">At 8:00</p>
                        </span>
                      </div>
                      <p className="text-xs px-2 py-1 bg-[#FFF7ED] text-orange-600 rounded-[30px]">
                        20 sets
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="mb-1">Tuesday</h3>
                    <div className="p-1 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img className="w-[34.57px] h-8" src="/image 97.png" alt="" />
                        <span className="space-y-1">         
                          <p className="text-sm ">Back Stretch</p>
                          <p className="text-xs text-black/50">At 8:00</p>
                        </span>
                      </div>
                      <p className="text-xs px-2 py-1 bg-[#FFF7ED] text-[#F97316] rounded-[30px]">
                        10 rounds
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="mb-1">Wednesday</h3>
                    <div className="p-1 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img className="w-[34.57px] h-8" src="/image 98.png" alt="" />
                        <span className="space-y-1">
                          <p className="text-sm ">Yoga</p>
                          <p className="text-xs text-black/50">At 8:00</p>
                        </span>
                      </div>
                      <p className="text-xs px-2 py-1 bg-[#FFF7ED] text-[#F97316] rounded-[30px]">
                        20 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-h-[119px] min-w-[318px] mt-14">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-black/70 tracking-wide">
                    Goals
                  </h2>
                                  <p className="text-sm text-[#F97316] flex items-center ">View All
                       <img src="/Arrow-orange.png" className="w-7" alt="" /> 
                     </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-sm">ABS & Stretch</h3>
                      <p className="text-xs text-black/50">
                        Saturday, April 14 | 8:00 AM
                      </p>
                    </div>
                    <p className="text-xs text-[#F97316]  px-3 py-1 rounded-[30px] bg-[#FFF7ED]">
                      30 Min/day
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-sm">Push Up</h3>
                      <p className="text-xs text-black/50">
                        Sunday, April 15 | 8:00 AM
                      </p>
                    </div>
                    <p className="text-xs text-[#F97316]  px-3 py-1 rounded-[30px] bg-[#FFF7ED]">
                      50 Sets/day
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-6 px-4 overflow-hidden min-h-48 w-full bg-linear-to-b from-[#9083E2] to-[#a7a0d4] text-white rounded-xl shadow-2xl mt-36 relative ">
                <div className="z-10 relative">
                  <h4 className="font-semibold">
                    50% off on Premium Membership
                  </h4>
                  <p className="text-xs mt-2 opacity-90 max-w-[70%]">
                    Upgrade on Premium Membership, and get unlimited benefits
                  </p>
                  <button className="mt-10 px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition">
                    Upgrade
                  </button>
                </div>
                {/* Simulated background graphic (people exercising) */}
                <img
                  src="/pic.png"
                  alt="Premium ad background"
                  className="absolute z-20 right-0 bottom-0 rounded-full p-2 w-[87px] h-[119px] object-cover "
                />
                <img
                  src="/Ellipse.png"
                  alt="Premium ad background"
                  className="absolute -right-6 -bottom-7  rounded-full p-2 w-[134px] h-[134px] object-cover "
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
