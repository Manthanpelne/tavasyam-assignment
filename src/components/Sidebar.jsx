import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col gap-[16px]">
      <div className=" flex  bg-white flex-col gap-[24px] max-w-[192px] h-full md:min-h-[840px]">
        <h1 className="text-center pt-[8px] pb-[24px] border-b border-gray-300 flex items-center justify-center gap-2">
          <span className="text-lg text-[#F97316] font-semibold">Fitness</span>
          <img src="/Workout-bold.png" className="w-8 h-8" alt="" />
        </h1>
        <div className="min-h-[752px]">
          <ul className="text-center text-sm font-semibold space-y-4 text-black/70">
            <li className="bg-[#F97316] text-white rounded-md py-3 flex gap-4 items-center px-4 ">
              <img src="/Dashbaord.png" className="w-6 h-6 " alt="" />
              Overview
            </li>
            <li className="py-2 flex gap-4 items-center px-4">
              <img src="/Workout.png" alt="" />
              Workout
            </li>
            <li className="py-2 flex gap-4 items-center px-4">
              <img src="/Diet Plan.png" alt="" />
              Diet Plans
            </li>
            <li className="py-2 flex gap-4 items-center px-4">
              <img src="/Goal.png" alt="" />
              Goals
            </li>
            <li className="py-2 flex gap-4 items-center px-4">
              <img src="/Schedule.png" alt="" />
              My Schedule
            </li>
            <li className="py-2 flex gap-4 items-center justify-between px-4">
              <span className="flex gap-4 items-center">
                <img src="/Progres.png" alt="" />
                Progress
              </span>
              <img src="/Arrow-dark.png" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4 p-3 ml-2 mr-2 rounded-xl hover:bg-gray-100 cursor-pointer">
        <img src="/Help.png" alt="" />
        <span className="text-sm font-medium">Help</span>
      </div>

      <div className="flex items-center gap-4 border-t border-gray-300 p-3 ml-2 mr-2   hover:bg-red-50 cursor-pointer">
        <img src="/Logout.png" alt="" />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
