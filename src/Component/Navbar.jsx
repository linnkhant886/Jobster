import React, { useState } from "react";
import Logo from "../assets/images/favicon.ico";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCog } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((store) => store.user);
  console.log(useSelector((store) => store.user));
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className=" flex justify-between items-center bg-white p-6 px-10">
        <div className=" flex gap-4  ">
          <img src={Logo} alt="" />
          <h1 className=" text-blue-600 text-5xl font-serif">Jobster</h1>
        </div>
        <h1 className=" text-4xl font-light">Dashboard</h1>
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={toggleDropdown}
          >
            <p className="  mr-3 flex items-center gap-2">
              <span>
                <FaUserCog size={20} />
              </span>
              {user?.name}
            </p>
            {isDropdownOpen ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </button>
          {/* Dropdown menu */}

          {isDropdownOpen && (
            <div
              id="dropdown"
              className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow  w-full dark:bg-gray-700"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
