import React from "react";
import { Chart, Stats } from "../../Component";
import { useSelector } from "react-redux";

const Allstat = () => {
  const { monthlyApplications } = useSelector((store) => store.alljob);
  console.log(monthlyApplications);
  console.log(useSelector((store) => store.alljob));

  return (
    <div className="  w-full p-10">
      <Stats></Stats>
      {monthlyApplications.length > 0 && <Chart></Chart>}
    </div>
  );
};

export default Allstat;
