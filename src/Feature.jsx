import React, { useState } from 'react';
import Jobs from './Jobs';

const Feature = ({featureJob}) => {
    const nb = featureJob.slice (0,4)
    const [item , setItem] = useState(nb)
    // setItem(nb[0])
    console.log(item)
    const allData = () =>{
        setItem(featureJob)
    }
    
    
    return (
        <div className='md:mx-20 mx-4'>
        <div className='grid md:grid-cols-2 grid-cols-1  gap-4'>
            {
                item.map(job => 
                <Jobs 
                job = {job}
                key={job.id}
                ></Jobs>) 
            }
        </div>
        {
            
        <div className=' flex justify-center mt-8,'>
        <button className='btn-primary w-36 ,{`${item.length === 6 }? "hidden" : "" `}' onClick={allData}>See more</button>
        </div>
        }
        </div>
    );
};

export default Feature;