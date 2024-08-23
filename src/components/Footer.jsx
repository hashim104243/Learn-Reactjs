import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="bg-[#F4FAF9] sm:flex sm:justify-start      sm:flex-wrap sm:space-x-10 sm:p-7   lg:justify-between lg:items-center   md:justify-center font-sans   ">
        <div className="sm:order-1 lg:mt-4  ">
          <div className="">
            <img className="p-4" src="logo-dark. footer.png" />
            <p className="p-5 text-[18px] sm:text-[18px] ">
              All rights reserved <span className="font-bold">Codeefly</span> ©
              2024
            </p>
          </div>
        </div>
        <div className="sm:order-3 lg:order-2   ">
          <div className="p-5 text-2xl sm:ml-[-40px]   ">News Letter</div>
          <div className="p-2 ml-5 mt-2 border border-solid border-black rounded w-80 md:w-[535px]  relative sm:w-[560px]  sm:ml-[-20px] lg:w-[260px] ">
            <input
              type="text"
              className="w-[100%]  bg-[#F4FAF9] h-8"
              readOnly
              placeholder="submit your email"
              border
            />
            <div className="absolute top-2 right-2  text-3xl text-[#80DB66] ">
              <MdOutlineEmail />
            </div>
          </div>
        </div>
        <div className="sm:order-2   lg:order-3  ">
          <div className="p-5 sm:pl-0   text-2xl ">Follow Me</div>
          <div className="flex sm:ml-0  ml-5 space-x-2  ">
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 ">
              <FaFacebookF />
            </div>
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3  ">
              <FaTwitter />
            </div>
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 ">
              <FaLinkedinIn />
            </div>
            <div className="text-xl text-white bg-[#1877f2] rounded-full p-3 ">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
