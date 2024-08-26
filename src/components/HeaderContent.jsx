import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function HeaderContent() {
  return (
    <div className="text-white flex flex-col justify-center items-center relative lg:flex-row lg:justify-around font-sans container   mx-auto">
      <div className="text-white flex flex-col justify-center items-center mt-9  lg:items-start  xl:ml-5 ">
        <div
          className="text-[18px] tracking-[4px] text-[#84f565]
           lg:text-3xl  lg:ml-[100px] xl:ml-2"
        >
          Hello I’M
        </div>
        <div className="text-6xl   xl:ml-0 ml-20 lg:ml-[100px] lg:text-[7rem]  w-96 ">
          <span>James</span> <span>Smith</span>
        </div>
        <div className=" text-center lg:flex lg:space-x-6 lg:items-center lg:mt-8 lg:ml-[100px] xl:ml-2">
          <div className="text-sm pt-6 pb-2 lg:pb-0 lg:pt-0 lg:text-xl ">
            A Passionate
          </div>
          <div className=" text-center text-[20px] text-[#80DB66] lg:text-3xl lg:mb-2 ">
            Software Engineer
          </div>
        </div>

        <div className="mt-8">
          <button className="text-white bg-[#80DB66] p-2 w-36 rounded lg:p-4 lg:w-40 lg:text-xl lg:ml-[100px] xl:ml-2">
            SAY Hello
          </button>
        </div>
      </div>
      <div className="  mt-16  h-[323px] w-96 lg:w-[26rem] lg:h-[535px] lg:mt-0 lg:mr-20   flex justify-center items-center      ">
        <img className="lg:w-full lg:h-[100%]  h-[300px]" src="person.png   " />
      </div>
      <div className="hidden  md:block absolute   text-white w-16  space-y-3 md:top-[60px] md:right-[90px] lg:right-[40px] container ">
        <div className="text-xl border border-white flex justify-center items-center p-4 rounded hover:bg-[#80DB66] hover:text-white  cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="text-xl  lg:text-[18px] border flex justify-center items-center p-3  rounded hover:bg-[#80DB66] hover:text-white cursor-pointer">
          <FaTwitter />
        </div>
        <div className="text-xl lg:text-[18px] border flex justify-center items-center p-3  rounded hover:bg-[#80DB66] hover:text-white cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="text-xl lg:text-[18px] border flex justify-center items-center p-3  rounded hover:bg-[#80DB66] hover:text-white cursor-pointer">
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}
// lg:text-[18px]
// md:w-96 md:h-[370px]
// md:w-3/4 md:h-[22rem]
