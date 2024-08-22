import React from "react";
import { SlGraduation } from "react-icons/sl";
export default function Education() {
  return (
    <div className=" bg-[#EFFFF3] p-5 sm:p-14 md:p-17 lg:p-10 lg:flex lg:space-x-32   xl:space-x-28  2xl:justify-center 2xl:space-x-28 font-sans  ">
      <div className="education-left  lg:w-[600px] ">
        <div className="text-[#80DB66] text-xl tracking-[2px]  md:tracking-[5px] md:text-2xl ">
          Education
        </div>
        <div className="text-[#2e2e37] text-[35px] font-bold pt-1 md:text-4xl ">
          My Education
        </div>
        <div className="text-[#4d4d5c] text-[20px] sm:text-[21px] pt-5 sm:pr-[30px] md:text-[22px]   ">
          Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
          hoye khbor nio na sit voluptatem accusantium dolore.
        </div>

        <div className="lg:mt-16">
          <div className="flex space-x-3 mt-6 sm:space-x-6  ">
            <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[4px] mt-2 md:pl-4 md:pr-4 md:pt-3 md:pb-[52px] ">
              <SlGraduation className="text-white   text-2xl md:text-4xl " />
            </div>
            <div className="">
              <div className="text-#2e2e37 text-3xl font-bold">
                Masters in Computer Science
              </div>
              <div className="mt-2 mb-4">
                <span className="text-[#4d4d5c] text-xl font-bold">
                  New York University
                </span>
                <span className="text-[#9b9db1] ">( 2012 - 2016 )</span>
              </div>
              <div className="text-[#4d4d5c] text-[19px] md:text-[21px]">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                veritatis et quasi architecto beatae vitae.
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-6 sm:space-x-6 ">
            <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[4px] mt-2 md:pl-4 md:pr-4 md:pt-3 md:pb-[52px] ">
              <SlGraduation className="text-white   text-2xl md:text-4xl " />
            </div>
            <div>
              <div className="text-#2e2e37 text-3xl font-bold">
                Bachelor in Computer Engineering
              </div>
              <div className="mt-2 mb-4">
                <span className="text-[#4d4d5c] text-xl font-bold">
                  Dhaka University
                </span>
                <span className="text-[#9b9db1] "> ( 2008 - 2011 )</span>
              </div>
              <div className="text-[#4d4d5c] text-[19px]  md:text-[21px]">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                veritatis et quasi architecto beatae vitae.
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-6 sm:space-x-6 ">
            <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[4px] mt-2  md:pl-4 md:pr-4 md:pt-3 md:pb-[52px]">
              <SlGraduation className="text-white   text-2xl md:text-4xl " />
            </div>
            <div>
              <div className="text-#2e2e37 text-3xl font-bold">
                Diploma in Graphic Design
              </div>
              <div className="mt-2 mb-4">
                <span className="text-[#4d4d5c] text-xl font-bold">
                  {" "}
                  Bangla College{" "}
                </span>
                <span className="text-[#9b9db1] "> ( 2006 - 2008 )</span>
              </div>
              <div className="text-[#4d4d5c] text-[19px]  md:text-[21px]">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                veritatis et quasi architecto beatae vitae.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="education-right mt-10 md:flex md:justify-center ">
        <img src="education-img.jpg" />
      </div>
    </div>
  );
}
