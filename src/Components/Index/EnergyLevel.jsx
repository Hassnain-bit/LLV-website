import React from "react";
import { Link } from "react-router-dom";

export default function EnergyLevel() {
  return (
    <>
      <div className="pb-20 xl:pt-[107px] xl:pb-60">
        <div className="max-w-[1080px] m-auto relative">
          <div className="mb-8  xl:mb-[100px]">
            <h1 className="bg-[#405F53] mb-8 p-8 font-bold text-[#FAF4ED] text-[28px] leading-[34px] uppercase text-center xl:mb-4 xl:bg-transparent xl:font-light xl:text-[60px] xl:leading-[64px] xl:text-black">
              Energy Level
            </h1>
            <p className="text-xl font-semibold mb-8 px-8 xl:text-3xl">
              How is your overall energy level? Do you feel like you have all
              the energy you need?
            </p>
          </div>

          <div className="relative xl:border xl:border-black">
            <div>
              <div className="px-8 xl:px-[84px] xl:py-[60px]">
                <p className="text-xl mb-8 xl:text-3xl">
                  How would you rate yourself on the level of energy you have in
                  your daily life?
                </p>

                <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="Very Low Energy"
                    type="checkbox"
                    value=""
                    className="w-9 h-9 text-black bg-transparent rounded-full border border-black focus:ring-[#faf4ed]" style={{border:"1px solid black"}}
                  />
                  <label
                    htmlFor="Very Low Energy"
                    className="ml-4 text-[16px] leading-[24px] font-normal xl:text-[20px] xl:ml-6"
                  >
                    Very Low Energy
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="Low Energy"
                    type="checkbox"
                    value=""
                    className="w-9 h-9 text-black bg-transparent rounded-full border border-black focus:ring-[#faf4ed]" style={{border:"1px solid black"}}
                  />
                  <label
                    htmlFor="Low Energy"
                    className="ml-4 text-[16px] leading-[24px] font-normal xl:text-[20px] xl:ml-6"
                  >
                    Low Energy
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="Neither Low/High"
                    type="checkbox"
                    value=""
                    className="w-9 h-9 text-black bg-transparent rounded-full border border-black focus:ring-[#faf4ed]" style={{border:"1px solid black"}}
                  />
                  <label
                    htmlFor="Neither Low/High"
                    className="ml-4 text-[16px] leading-[24px] font-normal xl:text-[20px] xl:ml-6"
                  >
                    Neither Low/High
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="High Energy"
                    type="checkbox"
                    value=""
                    className="w-9 h-9 text-black bg-transparent rounded-full border border-black focus:ring-[#faf4ed]" style={{border:"1px solid black"}}
                  />
                  <label
                    htmlFor="High Energy"
                    className="ml-4 text-[16px] leading-[24px] font-normal xl:text-[20px] xl:ml-6"
                  >
                    High Energy
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="Very Energetic"
                    type="checkbox"
                    value=""
                    className="w-9 h-9 text-black bg-transparent rounded-full border border-black focus:ring-[#faf4ed]" style={{border:"1px solid black"}}
                  />
                  <label
                    htmlFor="Very Energetic"
                    className="ml-4 text-[16px] leading-[24px] font-normal xl:text-[20px] xl:ml-6"
                  >
                    Very Energetic
                  </label>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[60px] m-auto space-y-4 flex flex-col items-center xl:mt-[80px]">
            <Link
              to="/stressLevel"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Next Question
            </Link>

            <Link
              to="/getStarted"
              className="flex justify-center w-[280px] px-[50px] py-3.5 bg-black rounded-[35px] font-bold text-[20px] leading-[24px] text-center text-[#FAF4ED]  ease-in-out duration-300  xl:px-[58px] xl:py-[18px] xl:w-full xl:max-w-[293px] hover:bg-[#545B89] hover:ease-in-out hover:duration-300"
            >
              Back
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
