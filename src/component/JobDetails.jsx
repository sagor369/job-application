import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const { id } = useParams();
  const jobData = useLoaderData();
  const [job, setJob] = useState({});
  useEffect(() => {
    const jobDetail = jobData.find((jobs) => jobs.id == id);
    setJob(jobDetail);
  }, []);
  const {
    description,
    education,
    experiences,
    title,
    salary,
    responsibility,
    phone,
    email,
    address,
    
  } = job;

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-8 mx-20">
      <div className="md:col-span-2">
        <p className="mb-8 text-neutral-500">
          <span className="capitalize text-black font-bold text-xl">
            Job descriptions:
          </span>
          {description}
        </p>
        <p className="mb-8 text-neutral-500">
          <span className="capitalize text-black font-bold text-xl">
            Job responsibility:
          </span>
          {responsibility}
        </p>
        <p className="mb-8 text-neutral-500">
          <span className="capitalize text-black font-bold text-xl">
            educational requirments:
          </span>
          {education}
        </p>
        <p className="mb-8 text-neutral-500">
          <span className="capitalize text-black font-bold text-xl">
            experiences
          </span>
          {experiences}
        </p>
      </div>
      <div className="bg-gray-100">
        <h1 className="border-b-2 font-bold text-2xl capitalize text-center py-4">
          job details
        </h1>
        <div className="mx-4 py-8 ">
          <p className="flex gap-3">
            <CurrencyDollarIcon className="icon" />
            <span className="title">Salary: </span>
            {salary} (per month)
          </p>
          <p className="flex gap-3">
            <BriefcaseIcon className="icon" />
            <span className="title">Job title:</span>
            {title}
          </p>
        </div>
        <div className="mx-4 mb-8">
          <h1 className="text-xl font-bold pb-3  text-center mb-8 border-b-2">
            contact information
          </h1>

          <p className="flex gap-3">
            <PhoneIcon className="icon" />
            <span className="title"> phone:</span> {phone}
          </p>
          <p className="flex gap-3">
            <EnvelopeIcon className="icon" />
            <span className="title">email:</span>
            {email}
          </p>
          <p className="flex gap-3">
            <MapPinIcon className="icon" />
            <span className="title"> location: </span>
            {address}
          </p>
          <button className="btn-primary mt-20 w-full ">
          <Link  to= {`/apply/${id}`} >
            Apply Now
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
