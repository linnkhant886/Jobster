import React, { useState } from "react";
import Form from "../Component/Form";
import Logo from "../assets/images/favicon.ico";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../Features/User/user";

const Register = () => {
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { Loading, user } = useSelector((store) => store.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    Setformdata((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = formdata;

    // console.log(formdata);
    if (!email || !password || !name) {
      toast.error("You Need To Fill All Field");
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className=" max-w-[450px] w-full   border-t-8 border-blue-600  p-12 py-16 hover:shadow-lg bg-white rounded-lg  shadow space-y-8">
        <div className=" flex  justify-center  gap-4  mb-10 ">
          <img src={Logo} alt="" />
          <h1 className=" text-blue-600 text-5xl font-serif">Jobster</h1>
        </div>

        <form onSubmit={handleSubmit} className=" space-y-7">
          <Form
            value={formdata.name}
            onChange={handleChange}
            name={"name"}
            type={"name"}
            label={"Enter YourName"}
            placeholder={"example "}
          >
            {" "}
          </Form>
          <Form
            value={formdata.email}
            onChange={handleChange}
            name={"email"}
            type={"email"}
            label={"Enter YourEmail"}
            placeholder={"example@gmail.com"}
          >
            {" "}
          </Form>

          <Form
            value={formdata.password}
            onChange={handleChange}
            name={"password"}
            type={"password"}
            label={"Enter Password"}
            placeholder={"*********"}
          >
            {" "}
          </Form>
          <p className=" text-center text-xl">
            Already a Member ?{" "}
            <Link to="/login">
              <span className=" underline text-blue-500">Login</span>
            </Link>
          </p>
          <div className="  font-serif  text-center  ">
            <button
              disabled={Loading}
              className="bg-blue-500  w-44 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {Loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
