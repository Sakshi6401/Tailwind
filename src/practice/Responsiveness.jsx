import React from'react';

const Res = () => (
    <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white hover:text-blue-900 font-bold py-2 px-4 rounded">Submit</button>
        <input className="bg-white sm:hover:bg-red-500 focus:bg-blue-200 border border-gray-300 rounded-lg py-2 px-4 block w-full" type="email" placeholder="jane@example.com"></input>
        <div className="sr-only opacity-75 shadow-lg bg-blue-900 text-blue-200 w-40 h-40 flex justify-center items-center">
            Here is a cool box
        </div>
    </div>
);

export default Res;