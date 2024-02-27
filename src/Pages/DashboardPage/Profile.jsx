import React, { useState } from "react";
import { Form } from "../../Component";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UpdateUser } from "../../Features/User/user";

const Profile = () => {
  const dispatch = useDispatch();
  const { Loading, user } = useSelector((store) => store.user);
  const [userData, SetuserData] = useState({
    email: user?.email,
    name: user?.name,
    lastName: user?.lastName,
    location: user?.location,
    
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetuserData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, name, lastName, location } = userData;
    console.log(userData);
    if (!email || !location || !name || !lastName) {
      toast.error("You Need To Fill All Field");
      return;
    }
    dispatch(UpdateUser({ email, name, lastName, location }));
  };
  return (
    <div className="  p-10 shadow-2xl  w-full flex  justify-center items-center  ">
      <div className="   bg-white py-20 px-24 rounded-lg ">
        <h1 className="text-2xl font-medium text-center  mb-10">Profile</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Form
                value={userData.name}
                onChange={handleChange}
                name={"name"}
                type={"name"}
                label={"Name"}
              ></Form>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Form
                value={userData.lastName}
                onChange={handleChange}
                name={"lastName"}
                type={"lastName"}
                label={"Last Name"}
              ></Form>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Form
                value={userData.email}
                onChange={handleChange}
                name={"email"}
                type={"email"}
                label={"Your Email"}
              ></Form>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Form
                value={userData.location}
                onChange={handleChange}
                name={"location"}
                type={"text"}
                label={"Location"}
              ></Form>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className=" space-y-2">
                <label htmlFor="country" className="block Label">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="shadow w-full border py-3 font-serif px-2  rounded-lg  focus:outline-none focus:shadow-outline"
                  defaultValue="Myanmar"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="   text-center  ">
            <button
              disabled={Loading}
              className="bg-blue-500  w-44 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {Loading ? "Loading..." : "Save Change"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
