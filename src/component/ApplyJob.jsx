import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToDb, getJobData } from "./fakedb";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ApplyJob = () => {
  const applyeData = useLoaderData();
  const { applyId } = useParams();
  const [jobs, setJobs] = useState({});

  useEffect(() => {
    const loadData = getJobData();
    const findData = loadData.find((data) => data.id == applyId);
    if (findData) {
      console.log("ame ace");
    } else {
      const jobItem = applyeData.find((job) => job.id == applyId);
      setJobs(jobItem);
      addToDb(applyId);
    }
  }, []);
  const { image, id, title, company, remoteOrOnsite, time, location, salary } =
    jobs;
  console.log(jobs);

  return (
    <div className="mx-20">
        <div className="md:flex gap-4 my-4">
            <div className="w-48 h-48 bg-gray-100 rounded flex justify-center items-center">
                <img className=" " src={image} alt="" />
            </div>

            <div className="md:flex justify-between px-4 flex-grow items-center">
                <div>
                    <h1 className="text-2xl font-bold mb-2 ">{title}</h1>
                    <p className="text-neutral-400  ">{company}</p>
                    <div className="flex gap-4">
                    <p className="border py-2 rounded text-cyan-600 px-6">
                        {" "}
                        {remoteOrOnsite}{" "}
                    </p>
                    <p className="border py-2 rounded text-cyan-600 px-6">{time} </p>
                    </div>
                    <div className="flex gap-4 mb-8">
                    <p className="flex gap-2">
                        {" "}
                        <MapPinIcon className="h-6 w-6 text-blue-500" />{" "}
                        <span>{location}</span>{" "}
                    </p>
                    <p className="flex gap-2">
                        {" "}
                        <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />{" "}
                        <span>salary: {salary}</span>
                    </p>
                    </div>
                </div>
                    <div className="">
                    <Link className="capitalize btn-primary py-2 " to={`/jobs/${id}`}>
                        View details
                    </Link>
                    </div>
            </div>
      </div>
    </div>
  );
};

export default ApplyJob;
