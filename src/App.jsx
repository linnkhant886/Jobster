import React from "react";
import { LandingPage, Register, Dashboard, ErrorPage, LoginPage } from "./Pages/index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className=" container mx-auto   ">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}>
          {" "}
        </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}>
          {" "}
        </Route>
        <Route path="/register" element={<Register></Register>}>
          {" "}
        </Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          {" "}
        </Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}>
          {" "}
        </Route>
      </Routes>
      <ToastContainer position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Flip />
    </div>
  );
};

export default App;
