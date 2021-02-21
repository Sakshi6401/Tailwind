import React from 'react';

const Border = () => (
    <div>
        <div><button className="bg-blue-800 rounded-lg border-l-8 border-blue-300 py-2 px-4 text-gray-400 text-sm m-4">Submit</button></div>
        
        <div><button className="text-red-500 border-2 border-red-500 rounded-full px-3 py-1 m-4">Cancel</button></div>
        
        <div><button className="bg-indigo-200 border-b-4 border-indigo-800 text-indigo m-4 px-4 py-1">Save</button></div>
        
        <div><button className="bg-yellow-600 border-yellow-800 rounded-full border-4 px-16 py-3 uppercase font-bold text-sm m-4">Buy Now</button></div>
        
        <div><button className="m-4 font-serif uppercase border rounded-lg border-black text-xs p-2">Send Postcard</button></div>
    </div>
);

export default Border;