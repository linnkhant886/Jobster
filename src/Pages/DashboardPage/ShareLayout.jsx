import React from "react";
import { Sidebar } from "../../Component";
import { Outlet } from "react-router-dom";

const ShareLayout = () => {
  return (
    <div className=" flex">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ShareLayout;
