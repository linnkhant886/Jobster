import React from "react";
import { IoStatsChart } from "react-icons/io5";
import { GrTableAdd } from "react-icons/gr";
import { LuFileSearch } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";

const SidbarMenu = ({ open }) => {
  return (
    <div>
      <ul className=" mt-16 space-y-8 px-3 cursor-pointer  font-mono   ">
        <li className=" group  flex items-center gap-3 duration-500  hover:scale-110">
          <span className="  group-hover:text-blue-500">
            <IoStatsChart size={25} />
          </span>
          <span className={` ${open ? "text-xl  " : "hidden"}`}>Stats</span>
        </li>
        <li className="group  flex items-center gap-3 duration-500 hover:scale-110">
          <span className="  group-hover:text-blue-500">
            <LuFileSearch size={25} />
          </span>
          <span className={` ${open ? "text-xl  " : "hidden"}`}>All Jobs</span>
        </li>
        <li className="group  flex items-center gap-3 duration-500 hover:scale-110">
          <span className="  group-hover:text-blue-500">
            <GrTableAdd size={25} />
          </span>
          <span className={` ${open ? "text-xl  " : "hidden"}`}>Add Jobs</span>
        </li>
        <li className="group  flex items-center gap-3 duration-500 hover:scale-110">
          <span className="  group-hover:text-blue-500">
            <RiProfileLine size={25} />
          </span>
          <span className={` ${open ? "text-xl  " : "hidden"}`}>Profile</span>
        </li>
      </ul>


      
    </div>
  );
};

export default SidbarMenu;
