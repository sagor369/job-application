import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb, getJobData } from './fakedb';

const ApplyJob = () => {
    const applyeData = useLoaderData()
    const {applyId} = useParams()
    const [jobs , setJobs] = useState()
    addToDb(applyId)
    
    useEffect(()=>{
        const loadData = getJobData()
        
        console.log(loadData)
    },[])
    
    return (
        <div>
            <h1>ame ace</h1>
        </div>
    );
};

export default ApplyJob;