import React, { useState } from "react";
import { Form } from "../../Component";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { CreateJob } from "../../Features/Job/Job";

const AddJob = () => {
  const [job, SetJob] = useState({
    position: "",
    company: "",
    jobLocation: "",
    status: "pending",
    jobTypes: "full-time",
  });
  const {
    Loading,

    isEditing,
  } = useSelector((store) => store.job);
  // console.log(useSelector((store) => store.job));
  const dispatch = useDispatch();

  const handleClear = (e) => {
    e.preventDefault();
    // Reset the job state to its initial empty values
    SetJob({
      position: "",
      company: "",
      jobLocation: "",
      status: "pending",
      jobTypes: "full-time",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { position, company, jobLocation, status, jobTypes } = job;
    console.log(job);
    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(CreateJob({ position, company, jobLocation, status, jobTypes }));
    SetJob({
      position: "",
      company: "",
      jobLocation: "",
      status: "pending",
      jobTypes: "full-time",
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetJob((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="  p-10 shadow-2xl  w-full   ">
      <div className="   bg-white py-20 px-24 rounded-lg ">
        <h1 className="text-3xl  font-mono text-center  mb-10">
          {isEditing ? "Edit Job" : "Add Job"}
        </h1>

        <form className="w-full  space-y-10">
          <div className=" flex  gap-6   ">
            <div className=" w-full ">
              <Form
                value={job.position}
                onChange={handleChange}
                name={"position"}
                type={"text"}
                label={"Postion"}
              ></Form>
            </div>

            <div className=" w-full">
              <Form
                value={job.company}
                onChange={handleChange}
                name={"company"}
                type={"text"}
                label={"Company"}
              ></Form>
            </div>

            <div className=" w-full">
              <Form
                value={job.jobLocation}
                onChange={handleChange}
                name={"jobLocation"}
                type={"text"}
                label={"job location"}
              ></Form>
            </div>
          </div>

          <div className=" flex items-center  gap-6   ">
            <div className="w-full ">
              <label
                className="block uppercase tracking-wid   font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={job.status}
                  onChange={handleChange}
                  name="status"
                >
                  <option value="pending">pending</option>
                  <option value="interview">interview</option>
                  <option value="declined">declined</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <label
                className="block uppercase tracking-wide font-serif   font-bold mb-2"
                htmlFor="Job-Types"
              >
                Job Types
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white "
                  id="grid-state"
                  value={job.jobTypes}
                  onChange={handleChange}
                  name="jobTypes"
                >
                  <option>full-time</option>
                  <option>part-time</option>
                  <option>remote</option>
                  <option>internship</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="  w-full flex mt-8  gap-4  ">
              <button
                onClick={handleClear}
                disabled={Loading}
                className=" bg-orange-400 w-44 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {Loading ? "Loading..." : "Clear"}
              </button>

              <button
                disabled={Loading}
                onClick={handleSubmit}
                className="bg-blue-500  w-44 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {Loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
