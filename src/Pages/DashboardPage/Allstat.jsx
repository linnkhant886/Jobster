import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Allstat = () => {
  return (
    <div className="  bg-slate-400 grid  grid-cols-2  gap-4 p-10  w-full">
      <div className="bg-white shadow-md rounded-lg max-h-[280px] p-4 w-full ">
        <div className="flex items-center p-4 ">
          <div className=" bg-blue-600 text-xl text-white py-4 px-6 rounded-lg">
            E
          </div>
          <div className="ml-6">
            <div className="font-medium text-gray-900">Civil Engineer</div>
            <div className="text-gray-500 text-sm">Bechtelar-Bednar</div>
          </div>
        </div>

        <div className=" grid  grid-cols-2">
          <div className="px-4 py-4 space-y-3  border-t-2">
            <div className="font-medium flex  gap-3 items-center text-xl text-gray-900">
              <span>
                <IoLocationSharp size={25} />
              </span>
              Kiamba
            </div>
            <div className="text-gray-500 flex gap-3  items-center ">
              <span>
                {" "}
                <MdWork size={25} />
              </span>
              internship
            </div>
          </div>

          <div className="px-4 py-4  border-t">
            <div className="font-medium text-gray-900">Kiamba</div>
            <div className="text-gray-500 text-sm">internship</div>
          </div>
        </div>
        <div className="flex items-center px-4 py-3  border-gray-200">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 rounded-md hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg max-h-[250px] w-full ">
        <div className="flex items-center p-4 bg-gray-50">
          <div className=" bg-blue-600 text-white py-3 px-5 rounded-lg">E</div>
          <div className="ml-6">
            <div className="font-medium text-gray-900">Civil Engineer</div>
            <div className="text-gray-500 text-sm">Bechtelar-Bednar</div>
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="font-medium text-gray-900">Kiamba</div>
          <div className="text-gray-500 text-sm">
            Status: Declined - Dec 27th, 2021
          </div>
        </div>
        <div className="flex items-center px-4 py-3 border-t border-gray-200">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-700 bg-red-100 rounded-md hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allstat;
