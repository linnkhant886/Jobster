import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage, getAlljobs } from "../Features/Alljob/Alljob";
import LoadingComponent from "./LoadingComponent";
import { Jobpaginator, SingleJob } from "./index";

const JobContainer = ({ Searchjob }) => {
  const dispatch = useDispatch();
  const { jobs, Loading, totalJobs, numOfPages, page } = useSelector(
    (store) => store.alljob
  );
  //   console.log(useSelector((store) => store.alljob));

  useEffect(() => {
    dispatch(getAlljobs(Searchjob));
  }, [Searchjob, dispatch, page]);

  useEffect(() => {
    // Reset page when numOfPages changes
    dispatch(changePage(1));
  }, [numOfPages, dispatch]);

  if (Loading) {
    return <LoadingComponent> </LoadingComponent>;
  }

  if (jobs.length === 0) {
    return "No Job To Display";
  }
  return (
    <div className="  w-full  ">
      <h1 className=" py-4  text-xl">
        {totalJobs} job{jobs.length > 1 && "s"} found!
      </h1>

      <div className=" grid lg:grid-cols-2 gap-3">
        {jobs.map((job) => {
          return (
            <SingleJob key={job._id} {...job}>
              {" "}
            </SingleJob>
          );
        })}
      </div>

      <div>{numOfPages > 1 && <Jobpaginator></Jobpaginator>}</div>
    </div>
  );
};

export default JobContainer;
