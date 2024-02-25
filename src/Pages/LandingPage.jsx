import React from "react";
import Logo from "../assets/images/favicon.ico";
import Main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className=" p-8 container mx-auto  ">
      <nav className=" flex  gap-4 md:mb-40 lg:mb-20  mb-40 ">
        <img src={Logo} alt="" />
        <h1 className=" text-blue-600 text-5xl font-serif">Jobster</h1>
      </nav>

      <div className=" flex justify-center items-center lg:px-12  ">
        <div className=" lg:w-1/2  md:space-y-8 space-y-10">
          <h1 className="  text-4xl md:text-5xl font-sans">
            Job <span className=" text-blue-600"> Tracking</span> App
          </h1>
          <p className=" md:w-full lg:w-[75%] text-xl">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>

          <Link to="/login">
            <button
              className="inline-block mt-6 w-40 rounded bg-indigo-600  px-6 py-3 text-sm font-medium text-white transition hover:rotate-1 hover:scale-105 focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              Login / Register
            </button>
          </Link>
        </div>

        <div className=" hidden lg:block md:w-1/2">
          <img src={Main} alt="" className=" w-[700px]" />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
