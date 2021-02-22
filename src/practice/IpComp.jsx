import React from 'react';

const IpComp = () => (
    <div className='flex flex-col justify-center items-center mx-4 my-16'>
        <label for='full_name' className='select-none text-gray-700 opacity-90 text-sm font-bold'>Full Name</label>
        <input id='full_name' placeholder='Enter your full name' className='mt-2 border border-gray-300 w-4/6 placeholder-indigo-300 shadow rounded-lg text-sm px-3 py-2'></input>
        <button className='mt-2 bg-blue-900 rounded-md px-3 py-2 text-blue-100'>Save</button>
    </div>
);

export default IpComp;