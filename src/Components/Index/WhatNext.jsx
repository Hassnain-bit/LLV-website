import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TimePicker } from 'react-ios-time-picker';

export default function WhatNext() {
  const [value, setValue] = useState("10:00");

  const onChange = (timeValue) => {
    setValue(timeValue);
  };
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:bg-transparent xl:mb-[100px] xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
            What's Next?
          </h1>

          <div className="relative xl:border xl:border-black">
            <div className="px-8 xl:px-[84px] xl:py-[60px]">
              <div className="space-y-8">
                <p className="text-xl xl:text-3xl">
                  dōTERRA dietary supplements are an important part of a
                  wellness lifestyle estate will help you look, feel, and live
                  younger, longer.* They are an excellent complement to dōTERRA
                  CPTG essential oils and other wellness lifestyle products.
                </p>

                <p className="text-xl xl:text-3xl">
                  One of the keys to being successful in your new wellness
                  lifestyle is to decide now when you would like to take your
                  Lifelong Vitality Products.
                </p>

                <p className="text-xl xl:text-3xl">
                  You need to take two doses per day. We recommend the Morning
                  and Afternoon.
                </p>

                <p className="text-xl font-semibold xl:text-3xl">
                  When would you like to schedule your first notification for
                  your first dose of each day?
                </p>
              </div>

              <div className="border border-black mt-10">
                <TimePicker onChange={onChange} value={value} />
              </div>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/getStarted"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/discover"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
