import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Features/Alljob/Alljob";

const Jobpaginator = () => {
  const { Loading, numOfPages, page } = useSelector((store) => store.alljob);
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(page);

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  //   console.log(pages);

  const next = () => {
    let newpage = page + 1;

    if (newpage > numOfPages) {
      newpage = 1;
    }
    dispatch(changePage(newpage));
    setActivePage(newpage);
  };

  const prev = () => {
    let newpage = page - 1;

    if (newpage < 1) {
      newpage = 8;
    }
    dispatch(changePage(newpage));
    setActivePage(newpage);
  };
  return (
    <div>
      <div className=" flex  justify-center mt-5 mb-0">
        <div className="flex items-center gap-2 text-blue-500 font-serif">
          <button
            onClick={() => prev()}
            className="flex items-center gap-2  px-3 py-3  bg-white text-xs font-bold text-center  uppercase align-middle transition-all select-none hover:bg-blue-500 hover:text-white rounded-lg active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <FaArrowLeft />
            Previous
          </button>
          <div className="flex items-center  bg-blue-100 rounded-md   cursor-pointer ">
            {pages.map((pagenumber) => {
              return (
                <button
                  type="button"
                  key={pagenumber}
                  onClick={() => {
                    dispatch(changePage(pagenumber));
                    setActivePage(pagenumber);
                  }}
                  className={`px-5 rounded py-2 w-full hover:bg-blue-600 hover:text-white ${
                    activePage === pagenumber ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {pagenumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => next()}
            className="flex items-center gap-2  px-3 py-3  bg-white text-xs font-bold text-center  uppercase align-middle transition-all select-none hover:bg-blue-500 hover:text-white rounded-lg active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobpaginator;
