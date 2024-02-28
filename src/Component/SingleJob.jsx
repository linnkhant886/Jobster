import moment from "moment";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdWork, MdDateRange } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deletejob } from "../Features/Alljob/Alljob";

const SingleJob = (job) => {
  const { _id, company, jobLocation, jobType, position, status, createdAt } =
    job;
  const date = moment(createdAt).format("MMM Do, YYYY");

  const dispatch = useDispatch();

  const getStatusClassName = (status) => {
    switch (status) {
      case "pending":
        return "text-orange-500 bg-orange-100";
      case "declined":
        return "text-rose-500 bg-rose-100";
      case "interview":
        return "text-indigo-500 bg-indigo-100";
      default:
        return "";
    }
  };

  const className = getStatusClassName(status);

  return (
    <div className="  ">
      <div className="bg-white shadow-md rounded-lg max-h-[280px] p-4 w-full ">
        <div className="flex items-center p-4 ">
          <div className=" uppercase bg-blue-500 text-4xl text-white  py-3 px-5 rounded-lg">
            {company.charAt(0)}
          </div>
          <div className="ml-6">
            <div className="font-medium text-gray-900">{position}</div>
            <div className="text-gray-500 text-sm">{company}</div>
          </div>
        </div>

        <div className=" grid  grid-cols-2">
          <div className="px-4 py-4 space-y-3  border-t-2">
            <div className="font-medium flex  gap-3 items-center text-xl text-gray-500">
              <span>
                <IoLocationSharp size={25} />
              </span>
              {jobLocation}
            </div>
            <div className="text-gray-500 flex gap-3  items-center ">
              <span>
                {" "}
                <MdWork size={25} />
              </span>
              {jobType}
            </div>
          </div>

          <div className="px-4 py-4  space-y-3 border-t">
            <div className="font-medium flex gap-3  items-center text-gray-500">
              {" "}
              <span>
                <MdDateRange size={25} />
              </span>
              {date}
            </div>
            <div
              className={`py-1 px-3 rounded-md w-24 font-medium ${className}`}
            >
              {status}
            </div>
          </div>
        </div>
        <div className="flex items-center px-4 py-3  border-gray-200">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deletejob(_id))}
            type="button"
            className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 rounded-md hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
