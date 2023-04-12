import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb, getJobData } from "./fakedb";
import ApplyCart from "./ApplyCart";

const ApplyJob = () => {
  const applyeData = useLoaderData();
  const { applyId } = useParams();
  const getLocalData = getJobData();
  const [jobs, setJobs] = useState(getLocalData);
  
  useEffect(() => {
    if(applyId){
      let itemJob = []
    const loadData = getJobData();
    if (loadData.length > 0) {
        const findData = loadData.find((data) => data.id == applyId);
        if(findData){
            setJobs(loadData)
        }
        else{
            const data = {id: applyId}
            itemJob = [...loadData, data]
            setJobs(itemJob)
            addToDb(applyId)
            
            
        }

    }
    else{
        const data = {id: applyId}
        itemJob.push(data)
        setJobs(itemJob)
        addToDb(applyId)
    } }
},[applyId])

  return (
    <div className="mx-20">
        {
            jobs.map(job => <ApplyCart 
                applyeData={applyeData}
                job= {job}
                 key={job.id} 
                 ></ApplyCart>)
        }
    </div>
  );
};

export default ApplyJob;
