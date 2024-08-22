import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-[#EEF4FA] h-[1300px] lg:h-[800px] lg:flex font-sans   ">
      <div
        className="p-10 relative sm:mx-auto sm:w-[30rem] 
      lg:w-[35rem] lg:ml-8 "
      >
        <div className="w-24 h-24 border-[#80DB66] border-4 absolute top-4 right-4 z-[0] "></div>
        <img src="about-img.jpg  " className="relative z-10" />
        <div className="w-16 h-[76px] bg-[#80DB66] absolute top-28   left-0 z-20"></div>
        <div className="w-12 h-16 bg-[#80DB66] absolute  bottom-[4px] left-[235px] z-20 sm:left-[340px]  lg:bottom-[170px] xl:bottom-[140px]"></div>
      </div>

      <div className=" lg:w-[30rem] xl:w-[40rem] lg:mt-[40px]  ">
        <div className="sm:ml-[70px] lg:ml-[0px] ">
          <div className="text-[#80DB66] text-[16px] pl-4 sm:text-xl ">
            ABOUT ME
          </div>
          <div className="text-4xl text-[2e2e37] pl-4 font-bold sm:p-4 lg:text-5xl xl:text-6xl">
            I Develop System that Works
          </div>
          <div className="text-[#4d4d5c] text-[18px] pt-4 pl-4 pr-5 sm:text-[19px] xl:w-[37rem] ">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia dese runt mollit anim id est laboru doloremque laudantium,
            totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto
            beatae vitae.
          </div>
          <div className="text-[#4d4d5c] text-[18px] p-5 sm:text-[19px] ">
            Oremque laudantium, totaeaque ipsa quae
          </div>
          <hr className="border-[0.11 ] border-[#bcc7d3] pt-4 pb-4 w-80 ml-[20px] sm:w-[480px]   md:w-[630px] lg:ml-[20px] lg:w-[90%]" />
        </div>

        <div className="sm:ml-[70px] lg:ml-[0px] xl:grid xl:grid-cols-2">
          <div className="flex text-xl p-1 space-x-24 items-center">
            <div className="ml-4 text-[#212529] ">Name</div>
            <div className=" text-[#4d4d5c]">Jame Smith</div>
          </div>
          <div className="flex text-xl p-1 space-x-28 items-center">
            <div className="ml-4 text-[#212529]">Age</div>
            <div className=" text-[#4d4d5c]">29 Year</div>
          </div>
          <div className="flex text-xl p-1 space-x-[52px] items-center">
            <div className="ml-4 text-[#212529]">Occupation</div>
            <div className=" text-[#4d4d5c]">System Engineer</div>
          </div>
          <div className="flex text-xl p-1 space-x-[90px] items-center">
            <div className="ml-4 text-[#212529]">Phone</div>
            <div className=" text-[#4d4d5c]">+123 456 7890</div>
          </div>
          <div className="flex text-xl p-1 space-x-[95px] items-center">
            <div className="ml-4 text-[#212529]">Email</div>
            <div className=" text-[#4d4d5c]">hello@thames.com</div>
          </div>
          <div className="flex text-xl p-1 space-x-[52px] items-center">
            <div className="ml-4 text-[#212529]">Nationality</div>
            <div className=" text-[#4d4d5c]">Bangladeshi</div>
          </div>
          <hr className="border-[0.11 ] border-[#bcc7d3] mt-6 mb-6 w-80 ml-[20px] sm:w-[480px]   md:w-[630px] lg:ml-[20px] lg:w-[90%] xl:w-[590px]" />
        </div>

        <div className="sm:flex sm:justify-around ">
          <div className="pl-4">
            <img src="signature.png" />
          </div>
          <div className="pl-4 pt-8 xl:pt-0 xl:flex xl:justify-center xl:items-center xl:space-x-3">
            <div className="text-xl xl:text-3xl"> Bruce Wayne </div>
            <div className="text-[#9b9db1] xl:text-[18px]">
              Software Architect, Google Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://thames-demo-nuxt.vercel.app/index-1
