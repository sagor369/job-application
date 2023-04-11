import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Jobs = ({ job }) => {
  // console.log(job)
  const { image, id, title, company, remoteOrOnsite, time, location, salary } =
    job;
  return (
    <div className="border p-6  ">
      <img className="w-2/3 h-32 pb-4" src={image} alt="" />
      <div className="mb-auto">
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
        <div className="">
          <Link className="capitalize btn-primary py-2 " to={`/jobs/${id}`}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
