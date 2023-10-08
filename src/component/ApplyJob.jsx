import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addToDb, getJobData } from "./fakedb";
import ApplyCart from "./ApplyCart";
import {Toaster, toast} from "react-hot-toast"

const ApplyJob = () => {
  const applyeData = useLoaderData();
  const { applyId } = useParams();
  // const [jobs, setJobs] = useState(getLocalData);
  const notify = () => toast('all ready added your job', );
  if(applyId){
    const addLoacl = addToDb(applyId)
    if(addLoacl){
      notify()
    }
  }
  const [apply , setApply] = useState(applyeData)

const getLocalData = getJobData();
  // find data in button 
  const findJob= (id) => {
    let localData = []
    getLocalData.map(ld => {
      const remotfind = applyeData.find(fd => fd.id == ld.id)
      if(remotfind){
        if(remotfind.remoteOrOnsite == id) {
          localData.push(remotfind)
        }       
      }

    })
    setApply(localData)
    
  } 
  
// on load data in apply card 
useEffect( () => {
  let localData = []
  getLocalData.map(ld => {
    const remotfind = applyeData.find(fd => fd.id == ld.id)
    if(remotfind){
        localData.push(remotfind)
    }
  })
  setApply(localData)
} ,[])
   
  

  return (
    <div className="mx-20">
      <div className="text-right mt-6 ">
        <NavLink className="border btn-primary py-3 px-4 ml-4"  to = '/apply'>All jobs</NavLink>
        <button onClick={()=> findJob("Remote")} className="border btn-primary py-3 px-4 ml-4" to = ''>Remote</button>
        <button onClick={()=> findJob("Onsite")} className="border btn-primary py-3 px-4 ml-4" to = ''>On-site</button>
      </div>
      
        {
            apply.map(job => <ApplyCart 
                job= {job}
                 key={job.id} 
                 ></ApplyCart>)
        }
        <Toaster toastOptions={{
    
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: 'red',
    },
  }}/>
    </div>
  );
};

export default ApplyJob;
