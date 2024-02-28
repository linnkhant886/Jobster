import React from "react";
import { JobContainer, SearchJob } from "../../Component";

const AllJob = () => {
  return (
    <div className=" p-10  w-full">
      <SearchJob></SearchJob>
      <JobContainer></JobContainer>
    </div>
  );
};

export default AllJob;
