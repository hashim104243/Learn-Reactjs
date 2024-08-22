import React from "react";
import { HiBars3 } from "react-icons/hi2";
export default function NavBar() {
  return (
    <nav className="flex items-center p-2   justify-between w-full  fixed top-0    bg-[#292522]  lg:pt-7 z-40 font-sans   ">
      <div className="nav-right  ">
        <div className="flex justify-start  ">
          <img src="/logo.png" className=" w-[120px] lg:w-52" />
        </div>
      </div>

      <div className="nav-left flex justify-center items-center text-white space-x-3 ml-2">
        <div className="list  text-white hidden  lg:block ">
          <ul className="flex space-x-9 text-2xl mr-7">
            <li className="text-[19px] font-bold">Home</li>
            <li className="text-[19px] font-bold">About</li>
            <li className="text-[19px] font-bold">Works</li>
            <li className="text-[19px] font-bold">Services</li>
            <li className="text-[19px] font-bold">Contact</li>
            <li className="text-[19px] font-bold">Blog</li>
          </ul>
        </div>
        <button className="border border-solid border-[#80DB66] p-3 lg:w-40 lg:text-[16px] font-bold text-xs rounded hover:bg-[#80DB66] hover:text-white ">
          DOWNLOAD CV
        </button>
        <div className="text-2xl text-[#80DB66] lg:hidden">
          <HiBars3 />
        </div>
      </div>
    </nav>
  );
}
