import React from 'react';

const JobCetegory = ({job}) => {
    const {name, image, totalJobs} = job
    return (
        <div className='bg-gray-100 p-4'>
            <img className='pb-4' src={image} alt="" />
            <h1>{name}</h1>
            <p className='text-neutral-400 mt-2'>{totalJobs}+ Jobs Available</p>
        </div>
    );
};

export default JobCetegory;