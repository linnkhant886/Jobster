import React from "react";
import { Sidebar } from "../../Component";
import { Outlet } from "react-router-dom";

const ShareLayout = () => {
  return (
    <div className=" flex">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default ShareLayout;
