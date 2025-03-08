import React from 'react'
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const HeaderMain = () => {
  return (
    <div className="border-b py-6 border-grey-200">
      <div className="sm:flex justify-between items-center container ">
        <div className="px-4 font-bold pb-5 text-4xl text-blackish sm:pb-0">
          LOGO
        </div>
        <div className=" flex-row relative flex-nowrap w-full sm:w-[300px] ">
          <input
            className="border-gray-200 border px-4 py-1 rounded-lg w-full  "
            placeholder="search your product here...."
          />
          <FaSearch className="absolute right-0 top-0 mt-3 mr-3 text-grey-400" />
        </div>
        <div className="hidden text-2xl lg:flex gap-4 text-gray-500 ">
          <div className="cursor-pointer relative">
            {" "}
            <FaRegUser />
            <div className="notification_dot "> 0</div>
          </div>
          <div className="cursor-pointer relative">
            {" "}
            <FaRegHeart />
            <div className="notification_dot "> 1</div>
          </div>
          <div className="cursor-pointer relative">
            {" "}
            <FiShoppingBag />
            <div className="notification_dot "> 10</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain