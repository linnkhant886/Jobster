import React from "react";
import { Navbar, Sidebar } from "../../Component";
import { Outlet } from "react-router-dom";

const ShareLayout = () => {
  return (
    <div>
      <div className=" flex">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default ShareLayout;
