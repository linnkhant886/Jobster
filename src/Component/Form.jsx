import React from "react";

const Form = ({ type, name, label, placeholder = "", value, onChange }) => {
  return (
    <div className="  space-y-2 ">
      <label className=" block Label" htmlFor={name}>
        {label}
      </label>
      <input
        className=" shadow w-full border py-3 font-serif px-2  rounded-lg  focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Form;
