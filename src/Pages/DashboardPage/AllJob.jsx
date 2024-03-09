import React, { useState } from "react";
import { JobContainer, SearchJob } from "../../Component";

const AllJob = () => {
  const [localSearch, setLocalSearch] = useState("");
  const [Searchjob, SetSearchjob] = useState({
    search: "",
    status: "all",
    jobTypes: "all",
    sort: "lasted",
  });
  console.log(Searchjob);

  return (
    <div className=" p-10  w-full space-y-10">
      <SearchJob
        Searchjob={Searchjob}
        SetSearchjob={SetSearchjob}
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
      ></SearchJob>
      <JobContainer Searchjob={Searchjob}></JobContainer>
    </div>
  );
};

export default AllJob;
