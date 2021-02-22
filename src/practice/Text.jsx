import React from 'react';

const Text = () => (
    <div className='m-3 font-sans'>
        <h1 className='capitalize text-xl text-gray-900'>Lorem ipsum dolor sit amet consectetur.</h1>

        <p className='mt-3 tracking-wide leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
        </p>
        
        <div className='m-2 p-4 bg-gray-900 text-gray-400'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit orci ac nisl varius varius. Nullam auctor finibus pulvinar. Morbi porttitor placerat enim nec consequat.
            </p>
            <p className='mt-3 text-gray-300'>- Victor Gonzalez, <span className='italic'>instructor</span></p>
        </div>
        
        <button className='bg-blue-500 text-blue-200 uppercase px-4 py-3'>Enroll Now</button>
    </div>
);

export default Text;