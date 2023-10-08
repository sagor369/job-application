import React, { useState } from 'react';
import Jobs from './Jobs';

const Feature = ({featureJob}) => {
    const [seeMore, setSeeMore] = useState(false)
    const nb = featureJob.slice (0,4)
    const [item , setItem] = useState(nb)
    // setItem(nb[0])
    const allData = () =>{
        setItem(featureJob)
        setSeeMore(true)
    }

    const lessData = () =>{
        const nb = featureJob.slice (0,4)
        setItem(nb) 
        setSeeMore(false)
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
            {
                seeMore ?<button className='btn-primary p-4 mt-12 ,{`${item.length === 6 }? "hidden" : "" `}' onClick={lessData}>Less more</button> :
                !seeMore && <button className='btn-primary p-4 mt-12 ,{`${item.length === 6 }? "hidden" : "" `}' onClick={allData}>See more</button>
            }
        
        </div>
        }
        </div>
    );
};

export default Feature;