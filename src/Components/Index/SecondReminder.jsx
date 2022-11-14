import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TimePicker } from "react-ios-time-picker";

export default function SecondReminder() {
  const [value, setValue] = useState("00:00");

  const onChange = (timeValue) => {
    setValue(timeValue);
  };

  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:bg-transparent xl:mb-[100px] xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
            Second Reminder
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
                  When would you like to schedule your second notification for
                  your second dose of Lifelong Vitality Pack each day?
                </p>
              </div>

              <div className="border border-black mt-12">
                <TimePicker onChange={onChange} value={value} />
              </div>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/allSet"
              className="flex justify-center w-[310px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300 xl:py-[18px] xl:w-full xl:max-w-[326px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Set Second Dose Notification
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
