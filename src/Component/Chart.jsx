import React, { useState } from "react";
import { AreaChart, BarChart } from "./index";
import { useSelector } from "react-redux";


const Chart = () => {
  const { monthlyApplications:data } = useSelector((store) => store.alljob);
  
  const [barChart, SetbarChart] = useState(true);
  return (
    <div>
      <div className=" text-center py-10">
        <p className=" text-3xl">Monthly Applications</p>
        <button
          type="button"
          onClick={() => SetbarChart(!barChart)}
          className={` text-xl mt-3 text-blue-500 cursor-pointer `}
        >
          {barChart ? "AreaChart" : "BarChart"}
        </button>
        {barChart ? <AreaChart data={data}></AreaChart> : <BarChart data={data}></BarChart>}
      </div>
    </div>
  );
};

export default Chart;
