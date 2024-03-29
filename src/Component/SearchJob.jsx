
import { useSelector, useDispatch } from "react-redux";

import Form from "./Form";


const SearchJob = ({Searchjob,SetSearchjob,setLocalSearch,localSearch}) => {
 
  const { Loading } = useSelector((store) => store.job);
  // console.log(useSelector((store) => store.job));
  const dispatch = useDispatch();

  const handleClear = (e) => {
    e.preventDefault();
    // Reset the job state to its initial empty values
    SetSearchjob({
      search: "",
      status: "all",
      jobTypes: "all",
      sort: "lasted",
    });
  };

  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLocalSearch(value)
    SetSearchjob((pre) => ({ ...pre, [name]: value }));
  };
  return (
    <div className="   shadow-md    ">
      <div className="   bg-white py-10 px-10 rounded-lg ">
        <h1 className="text-3xl  font-mono text-center  mb-10">Search Form</h1>

        <form className="w-full  space-y-10">
          <div className="  grid  grid-cols-3  gap-6   ">
            <div className=" w-full">
              <Form
                value={Searchjob.search}
                onChange={handleChange}
                name={"search"}
                type={"text"}
                label={"Search"}
              ></Form>
            </div>

            <div className="w-full ">
              <label
                className="block uppercase tracking-wid   font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={Searchjob.status}
                  onChange={handleChange}
                  name="status"
                >
                  <option value="all">all</option>
                  <option value="pending">pending</option>
                  <option value="interview">interview</option>
                  <option value="declined">declined</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <label
                className="block uppercase tracking-wide font-serif   font-bold mb-2"
                htmlFor="Job-Types"
              >
                Job Types
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white "
                  id="grid-state"
                  value={Searchjob.jobTypes}
                  onChange={handleChange}
                  name="jobTypes"
                >
                  <option>all</option>
                  <option>full-time</option>
                  <option>part-time</option>
                  <option>remote</option>
                  <option>internship</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <label
                className="block uppercase tracking-wid   font-bold mb-2"
                htmlFor="status"
              >
                Sort
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={Searchjob.sort}
                  onChange={handleChange}
                  name="sort"
                >
                  <option value="lasted">lasted</option>
                  <option value="oldest">oldest</option>
                  <option value="a-z">a-z</option>
                  <option value="z-a">z-a</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="  w-full flex mt-8   ">
              <button
                onClick={handleClear}
                disabled={Loading}
                className=" bg-orange-400  w-full hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {Loading ? "Loading..." : "Clear"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchJob;
