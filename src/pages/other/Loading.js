import React from 'react';
import gif from '../../assets/Rhombus.gif';

const Loading = () => {
    return (
        <div className='w-full mx-auto mt-72'>
            <div className='flex justify-center items-center'>
                <img src={gif} alt="" />
            </div>
        </div>
    );
};

export default Loading;