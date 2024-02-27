import React from "react";

const Allstat = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">User Information</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            defaultValue="US"
            readOnly
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Allstat;
