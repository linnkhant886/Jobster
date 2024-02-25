import React, { useEffect, useState } from "react";
import Form from "../Component/Form";
import Logo from "../assets/images/favicon.ico";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../Features/User/user";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Loading, user } = useSelector((store) => store.user);
  const [formdata, Setformdata] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    Setformdata((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formdata;
    console.log(formdata);
    if (!email || !password) {
      toast.error("You Need To Fill All Field");
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user]);
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className=" max-w-[450px] w-full   border-t-8 border-blue-600  p-12 py-16 hover:shadow-lg bg-white rounded-lg  shadow space-y-8">
        <div className=" flex  justify-center  gap-4  mb-10 ">
          <img src={Logo} alt="" />
          <h1 className=" text-blue-600 text-5xl font-serif">Jobster</h1>
        </div>

        <form onSubmit={handleSubmit} className=" space-y-7">
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
            Not a member yet ?{" "}
            <Link to="/register">
              <span className=" underline text-blue-500">Register</span>
            </Link>
          </p>
          <div className="   text-center  ">
            <button
              disabled={Loading}
              className="bg-blue-500  w-44 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {Loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
