import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Logo from "../assets/images/favicon.ico";
import SidbarMenu from "./SidbarMenu";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../Features/User/user";

const Sidebar = () => {
  const [open, setopen] = useState(true);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Dispatching LogoutUser:", LogoutUser); // Debug statement
    dispatch(LogoutUser());
  };
  return (
    <div
      className={`h-screen   sticky top-0  p-5 cursor-pointer duration-300 transition-all bg-slate-50 ${
        open ? "w-72 " : " w-20"
      }`}
    >
      <div
        onClick={() => setopen(!open)}
        className=" absolute  right-[-13px] top-20 cursor-pointer  border rounded-full p-2 bg-yellow-200"
      >
        {open ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
      <div className=" inline-flex items-center  ">
        <img src={Logo} alt="" className=" mr-5" />
        <h1
          className={` text-blue-600 text-4xl font-serif ${
            !open && " scale-0"
          }`}
        >
          Jobster
        </h1>
      </div>
      <div>
        <SidbarMenu open={open}></SidbarMenu>
      </div>

      <div
        onClick={handleLogout}
        className=" absolute flex gap-3 font-mono  px-3 bottom-4 border-t border-gray-100  hover:text-red-600 hover:scale-110 duration-300"
      >
        <MdLogout size={25} className="hover:text-red-600" />
        <button className={` ${open ? "text-xl" : "scale-0"}`}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
