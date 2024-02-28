import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlljobs } from "../Features/Alljob/Alljob";
import LoadingComponent from "./LoadingComponent";
import SingleJob from "./SingleJob";

const JobContainer = () => {
  const dispatch = useDispatch();
  const { jobs, Loading } = useSelector((store) => store.alljob);
  //   console.log(useSelector((store) => store.alljob));

  useEffect(() => {
    dispatch(getAlljobs());
  }, []);
  if (Loading) {
    return <LoadingComponent> </LoadingComponent>;
  }

  if (jobs.length === 0) {
    return "No Job To Display";
  }
  return (
    <div className="  w-full  ">
      <h1>{jobs.length} jobs found!</h1>

      <div className=" grid lg:grid-cols-2 gap-3">
        {jobs.map((job) => {
          return (
            <SingleJob key={job._id} {...job}>
              {" "}
            </SingleJob>
          );
        })}
      </div>
    </div>
  );
};

export default JobContainer;
