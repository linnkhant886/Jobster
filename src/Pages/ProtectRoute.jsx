import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  // console.log(console.log(useSelector((store) => store.user)));

  if (!user) {
    return <Navigate to="/landing"></Navigate>;
  }

  return children;
};

export default ProtectRoute;
