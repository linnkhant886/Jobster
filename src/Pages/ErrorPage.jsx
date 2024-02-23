import React from "react";
import NotFound from "../assets/NotFound.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" p-10 min-h-[100vh]">
      <div className=" flex flex-col justify-center items-center gap-4 ">
        <img src={NotFound} alt="" className=" w-[900px]" />

        <h1 className=" text-2xl">Ohh! Page Not Found</h1>
        <p className=" text-gray-400">
          {" "}
          We can't seem to find the page you're looking for
        </p>
        <Link to="/">
          <a href="" className="  underline text-blue-500">
            Back Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
