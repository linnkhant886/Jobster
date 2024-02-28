import React from "react";
import { IoStatsChart } from "react-icons/io5";
import { GrTableAdd } from "react-icons/gr";
import { LuFileSearch } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SidbarMenu = ({ open }) => {
  return (
    <div>
      <ul className=" mt-16   px-3 cursor-pointer  font-mono   ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-blue-400" : undefined
          }
        >
          <li className=" group flex items-center gap-3 duration-500  hover:scale-110 mb-6">
            <span className="  group-hover:text-blue-500">
              <IoStatsChart size={25} />
            </span>
            <span className={` ${open ? "text-xl     " : "hidden"}`}>
              Stats
            </span>
          </li>
        </NavLink>

        <NavLink
          to="/all-job"
          className={({ isActive }) =>
            isActive ? " text-blue-400" : undefined
          }
        >
          <li className="group  flex items-center gap-3 duration-500 hover:scale-110 mb-6">
            <span className="  group-hover:text-blue-500">
              <LuFileSearch size={25} />
            </span>
            <span className={` ${open ? "text-xl  " : "hidden"}`}>
              All Jobs
            </span>
          </li>{" "}
        </NavLink>
        <NavLink
          to="/add-job"
          className={({ isActive }) =>
            isActive ? " text-blue-400" : undefined
          }
        >
          <li className="group  flex items-center gap-3 duration-500 hover:scale-110 mb-6">
            <span className="  group-hover:text-blue-500">
              <GrTableAdd size={25} />
            </span>
            <span className={` ${open ? "text-xl  " : "hidden"}`}>
              Add Jobs
            </span>
          </li>
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? " text-blue-400" : undefined
          }
        >
          <li className="group  flex items-center gap-3 duration-500 hover:scale-110 mb-6">
            <span className="  group-hover:text-blue-500">
              <RiProfileLine size={25} />
            </span>
            <span className={` ${open ? "text-xl  " : "hidden"}`}>Profile</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SidbarMenu;
