import React from 'react';

const Ecard = () => (
    <div className='h-screen bg-gray-500 flex justify-center items-center'>
        <div className='bg-white rounded w-2/3 flex-col rounded overflow-hidden'>
            <div className='p-2 bg-gray-200 text-gray-700'>
                The title of the card here
            </div>
            <div className='flex items-center justify-between'>
                <div className='m-3 bg-yellow-900 rounded-xl px-2 py-1 text-xs uppercase text-yellow-100'>Under Review</div>
                <div className='m-3 text-gray-700 text-xs font-bold'>May 14, 1988</div>
            </div>
            <div className='border flex justify-center items-center'>
                <div className='bg-gray-200 rounded-md p-3 m-3 text-xs font-semi-bold'>
                    Here is a short comment about this employee.
                </div>
            </div>
            <div className='font-mono bg-gray-200 text-xs text-gray-700 font-bold py-2 px-3'>
                EMPLOYEE
            </div>
            <div className='bg-gray-200 flex items-center'>
                    <div className='my-2 mx-3 rounded-full bg-blue-900 text-blue-100 text-xs font-bold p-2'>VG</div>
                    <div className='text-xs font-bold'>
                        Victor Gonzalez<br/> <span className='font-medium text-gray-600'>Instructor</span>
                    </div>
            </div>
        </div>
    </div>
);

export default Ecard;