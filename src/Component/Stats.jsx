import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlljobs, getStats } from "../Features/Alljob/Alljob";
import { RiPassPendingFill } from "react-icons/ri";
import { MdWorkHistory, MdWorkOff } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";

const Stats = () => {
  const dispatch = useDispatch();
  const { stats } = useSelector((store) => store.alljob);
  console.log(useSelector((store) => store.alljob));

  const sumOfStats = Object.values(stats).reduce(
    (total, value) => total + value,
    0
  );

  // console.log(sumOfStats); // This will log the sum of declined, interview, and pending

  useEffect(() => {
    dispatch(getStats());
    dispatch(getAlljobs());
  }, []);
  return (
    <div>
      <div className=" grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className=" max-h-[200px] py-8 px-8 bg-white border-orange-300  border-b-8 rounded-lg">
          <div className=" flex  justify-between items-center mb-8 ">
            <p className=" text-5xl text-orange-400">{stats.pending}</p>
            <div className=" bg-orange-200 p-4 rounded-lg text-orange-400">
              <RiPassPendingFill size={30} />
            </div>
          </div>
          <p className=" text-2xl  font-mono">Pending Application</p>
        </div>
        <div className=" max-h-[200px] py-6 px-8 bg-white border-indigo-300  border-b-8 rounded-lg">
          <div className=" flex  justify-between items-center mb-8 ">
            <p className=" text-5xl text-indigo-400">{stats.interview}</p>
            <div className=" bg-indigo-200 p-4 rounded-lg text-indigo-400">
              <MdWorkHistory size={30} />
            </div>
          </div>
          <p className=" text-2xl  font-mono">Interviews Scheduled</p>
        </div>
        <div className=" max-h-[200px] py-6 px-8 bg-white border-rose-300  border-b-8 rounded-lg">
          <div className=" flex  justify-between items-center mb-8 ">
            <p className=" text-5xl text-rose-400">{stats.declined}</p>
            <div className=" bg-rose-200 p-4 rounded-lg text-rose-400">
              <MdWorkOff size={30} />
            </div>
          </div>
          <p className=" text-2xl  font-mono">Jobs Declined</p>
        </div>
        <div className=" max-h-[200px] py-6 px-8 bg-white border-blue-300  border-b-8 rounded-lg">
          <div className=" flex  justify-between items-center mb-8 ">
            <p className=" text-5xl text-blue-400">{sumOfStats}</p>
            <div className=" bg-blue-200 p-4 rounded-lg text-blue-400">
              <FaUsersBetweenLines size={30} />
            </div>
          </div>
          <p className=" text-2xl  font-mono">Total Application</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
