import { useEffect, useState } from "react";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import JobCetegory from "./component/JobCetegory";
import Feature from "./Feature";
import { Toaster } from 'react-hot-toast';

function App() {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    fetch("/Job-cetegory.json")
      .then((res) => res.json())
      .then((data) => setJobData(data.categories));
  }, []);
  const featureJob = useLoaderData(); 
  return (
    <div className="App">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 items-center">
        <div className="">
          <div className="w-3/4 mx-auto">
            <h1 className="capitalize text-5xl font-bold mb-3">
              We are with you to eliminate
              <span className="text-cyan-500">unemployment</span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary mt-4">Get Started</button>
          </div>
        </div>
        <div className="h-96 flex justify-center">
          <img
            className="h-full w-4/5"
            src="/All Images/P3OLGJ1 copy 1.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-20">
        <div className="md:text-center mx-4">
          <h1 className="md:text-3xl text-xl font-bold capitalize">Job Cetegory list</h1>
          <p className="text-neutral-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 mx-4 md:mx-20 md:gap-20 gap-6 mt-8">
          {jobData.map((job, index) => (
            <JobCetegory job={job} key={index}></JobCetegory>
          ))}
        </div>
      </div>
      <div>
        <div>

        </div>
        <div>
          <Feature featureJob = {featureJob}></Feature>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
