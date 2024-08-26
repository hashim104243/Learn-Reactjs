import React from "react";
// md:gap-x-[80px]  md:gap-y-[15px] lg:gap-x-[90px]   xl:gap-x-[77px] 2xl:ml-[100px]  2xl:gap-x-[0px]
export default function Services() {
  return (
    <section className="bg-[#25262F] " id="Services">
      <div className="bg-[#25262F] p-3 sm:p-16 font-sans container mx-auto ">
        <div className="flex flex-col items-center pt-12">
          <div className="text-[#80DB66] tracking-[2px] text-xl">Service</div>
          <div className="text-white font-medium text-4xl p-6">
            What I offer
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 mx-auto gap-x-[20px]  place-items-center md:gap-y-[12px] pb-10 lg:gap-x-9  2xl:gap-x-16 container 2xl:pl-[80px] 2xl:pr-[90px]">
          <div className="bg-white rounded-[10px] p-7 mx-auto    mt-7   md:pb-[60px] md:pt-[60px] lg:p-8 lg:flex  2xl:ml-[22px]  md:w-full ">
            <div className="p-3    lg:w-28 ">
              <img src="ser-icon1.png" className="w-12 md:w-[73px]      " />
            </div>
            <div className="lg:w-52 flex-grow ">
              <div className="font-medium text-[26px] sm:text-[28px] mt-3 mb-3 lg:w-[300px] lg:text-[30px]">
                Web Development
              </div>
              <div className="text-[19px] text-[#4d4d5c]   sm:text-[20px]    lg:text-[20px] flex-grow ">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] p-7  mx-auto      mt-7   md:pb-[60px] md:pt-[60px]  lg:p-8 lg:flex md:w-full   ">
            <div className="p-3    lg:w-28 ">
              <img src="ser-icon2.png" className="w-12 md:w-[73px]      " />
            </div>
            <div className="lg:w-52 flex-grow">
              <div className="font-medium text-[26px] sm:text-[28px] mt-3 mb-3 lg:w-[300px] lg:text-[30px]">
                Web Development
              </div>
              <div className="text-[19px] text-[#4d4d5c]   sm:text-[20px]  lg:text-[20px]  flex-grow">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] p-7  mx-auto     mt-7 md:pb-[60px] md:pt-[60px]  lg:p-8 lg:flex  2xl:ml-[24px]  md:mt-[10px] lg:mt-[24px] 2xl:mt-[32px] md:w-full   ">
            <div className="p-3    lg:w-28 ">
              <img src="ser-icon3.png" className="w-12 md:w-[73px]      " />
            </div>
            <div className="lg:w-52  flex-grow ">
              <div className="font-medium text-[26px] sm:text-[28px] mt-3 mb-3 lg:w-[300px] lg:text-[30px]">
                Web Development
              </div>
              <div className="text-[19px] text-[#4d4d5c]   sm:text-[20px]   lg:text-[20px]  flex-grow">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] p-7 mx-auto  md:w-full    mt-7   md:pb-[60px] md:pt-[60px]  lg:p-8 lg:flex    md:mt-[10px] lg:mt-[24px] 2xl:mt-[32px] ">
            <div className="p-3    lg:w-28 ">
              <img src="ser-icon4.png" className="w-12 md:w-[73px]      " />
            </div>
            <div className="lg:w-52 flex-grow ">
              <div className="font-medium text-[26px] sm:text-[28px] mt-3 mb-3 lg:w-[300px]  lg:text-[30px]">
                Web Development
              </div>
              <div className="text-[19px] text-[#4d4d5c]   sm:text-[20px]   lg:text-[20px] ">
                Ludantium totam rem aperia meaququae ab tatis et quasi
                architecto beatae vit dunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
