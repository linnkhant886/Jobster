import React from "react";
import {
  LandingPage,
  Register,
  ErrorPage,
  LoginPage,
  ProtectRoute,
} from "./Pages/index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  AddJob,
  Profile,
  Allstat,
  AllJob,
  ShareLayout,
} from "./Pages/DashboardPage";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <ShareLayout></ShareLayout>
            </ProtectRoute>
          }
        >
          <Route index element={<Allstat></Allstat>}></Route>
          <Route path="/add-job" element={<AddJob></AddJob>}></Route>
          <Route path="/all-job" element={<AllJob></AllJob>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>

        <Route path="/landing" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Flip
      />
    </div>
  );
};

export default App;
