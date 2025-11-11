import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-full '>
        <h1 className='text-center flex items-center justify-center gap-2'>
            <span className='text-lg text-[#F97316] font-semibold'>
                  Fitness
            </span>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 0 48 48"><g fill="none" stroke-width="3"><path fill="#F97316" d="M9.102 13.727c.032-1.321.78-2.503 2.092-2.656c.378-.043.812-.071 1.306-.071s.928.028 1.306.072c1.313.152 2.06 1.334 2.092 2.655c.047 1.944.102 5.29.102 10.273s-.055 8.329-.102 10.273c-.032 1.321-.78 2.503-2.092 2.656c-.378.043-.812.071-1.306.071s-.928-.028-1.306-.071c-1.313-.153-2.06-1.335-2.092-2.656C9.055 32.329 9 28.983 9 24s.055-8.329.102-10.273"/><path fill="#fff" d="M15.993 26.98a1328 1328 0 0 0 16.014-.007a620 620 0 0 1 0-5.946a1328 1328 0 0 0-16.014-.007a609 609 0 0 1 0 5.96"/><path fill="#F97316" d="M38.898 13.727c-.032-1.321-.78-2.503-2.092-2.656c-.378-.043-.812-.071-1.306-.071s-.928.028-1.306.072c-1.313.152-2.06 1.334-2.092 2.655C32.055 15.671 32 19.017 32 24s.055 8.329.102 10.273c.032 1.321.78 2.503 2.092 2.656c.378.043.812.071 1.306.071s.928-.028 1.306-.071c1.313-.153 2.06-1.335 2.092-2.656c.047-1.944.102-5.29.102-10.273s-.055-8.329-.102-10.273M3.055 18.803c.036-1.49.984-2.748 2.474-2.796a15 15 0 0 1 .942 0c1.49.048 2.438 1.305 2.474 2.796C8.975 20.026 9 21.739 9 24s-.026 3.974-.055 5.197c-.036 1.49-.984 2.748-2.474 2.796a15 15 0 0 1-.942 0c-1.49-.048-2.438-1.305-2.474-2.796C3.025 27.974 3 26.261 3 24s.026-3.974.055-5.197m41.89 0c-.036-1.49-.984-2.748-2.474-2.796a15 15 0 0 0-.942 0c-1.49.048-2.438 1.305-2.474 2.796C39.025 20.026 39 21.739 39 24s.026 3.974.055 5.197c.036 1.49.984 2.748 2.474 2.796a15 15 0 0 0 .942 0c1.49-.048 2.438-1.305 2.474-2.796c.03-1.223.055-2.936.055-5.197s-.026-3.974-.055-5.197"/><path stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" d="M9.102 13.727c.032-1.321.78-2.503 2.092-2.656c.378-.043.812-.071 1.306-.071s.928.028 1.306.072c1.313.152 2.06 1.334 2.092 2.655c.047 1.944.102 5.29.102 10.273s-.055 8.329-.102 10.273c-.032 1.321-.78 2.503-2.092 2.656c-.378.043-.812.071-1.306.071s-.928-.028-1.306-.071c-1.313-.153-2.06-1.335-2.092-2.656C9.055 32.329 9 28.983 9 24s.055-8.329.102-10.273m29.796 0c-.032-1.321-.78-2.503-2.092-2.656c-.378-.043-.812-.071-1.306-.071s-.928.028-1.306.072c-1.313.152-2.06 1.334-2.092 2.655C32.055 15.671 32 19.017 32 24s.055 8.329.102 10.273c.032 1.321.78 2.503 2.092 2.656c.378.043.812.071 1.306.071s.928-.028 1.306-.071c1.313-.153 2.06-1.335 2.092-2.656c.047-1.944.102-5.29.102-10.273s-.055-8.329-.102-10.273"/><path stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" d="M15.993 26.982a1293 1293 0 0 0 16.014-.013m-.001-5.939c-2.414-.017-5.4-.03-9.007-.03c-2.668 0-4.998.007-7.007.018M3.055 18.803c.036-1.49.984-2.748 2.474-2.796a15 15 0 0 1 .942 0c1.49.048 2.438 1.305 2.474 2.796C8.975 20.026 9 21.739 9 24s-.026 3.974-.055 5.197c-.036 1.49-.984 2.748-2.474 2.796a15 15 0 0 1-.942 0c-1.49-.048-2.438-1.305-2.474-2.796C3.025 27.974 3 26.261 3 24s.026-3.974.055-5.197m41.89 0c-.036-1.49-.984-2.748-2.474-2.796a15 15 0 0 0-.942 0c-1.49.048-2.438 1.305-2.474 2.796C39.025 20.026 39 21.739 39 24s.026 3.974.055 5.197c.036 1.49.984 2.748 2.474 2.796a15 15 0 0 0 .942 0c1.49-.048 2.438-1.305 2.474-2.796c.03-1.223.055-2.936.055-5.197s-.026-3.974-.055-5.197"/></g></svg>
        </h1>

        <div className='border-t border-[#d1cece] mt-7 pt-8 flex flex-col h-[90%] justify-between'>
            <div>
            <ul className='text-center text-sm font-semibold space-y-4 text-black/70'>
                <li className='bg-[#F97316] text-white rounded-md py-3 flex gap-2 items-center pl-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>
                    Overview</li>
                <li className='py-2 flex gap-2 items-center pl-4'>
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>
                     Workout</li>
                <li className='py-2 flex gap-2 items-center pl-4'>
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>
                    Diet Plans</li>
                <li  className='py-2 flex gap-2 items-center pl-4'>
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>
                    Goals</li>
                <li  className='py-2 flex gap-2 items-center pl-4'>
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>
                     My Schedule</li>
                <li  className='py-2 flex gap-2 items-center pl-4'>
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M2 11V2h9v9zm0 2h9v9H2zM13 2v9h9V2zm0 20v-9h9v9z"/></svg>
                Progress</li>
            </ul>
          </div>

        <div className="space-y-1 text-black/70">
             <div className="flex items-center space-x-3 p-2 ml-2 mr-2 rounded-xl hover:bg-gray-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
            <span className="text-sm font-medium">Help</span>
          </div>
          <div className="flex items-center space-x-3 p-2 ml-2 mr-2 rounded-xl  hover:bg-red-50 cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-3m18-6V6a3 3 0 00-3-3H6a3 3 0 00-3 3v2"></path></svg>
            <span className="text-sm font-medium">Logout</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar