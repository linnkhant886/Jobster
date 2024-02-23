import React from "react";
import { RemoveFromLocalStorage } from "../Utils/localStorage";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const Logout =() => {
    RemoveFromLocalStorage()
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }
  return (
    <div>
      Dashboard
      <button onClick={Logout}> Logout</button>
    </div>
  );
};
export default Dashboard;
