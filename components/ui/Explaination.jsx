import React from "react";

export const Explaination = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 mb-8 ">
      <h1 className="text-[3vw] max-sm:text-[4vw] font-rubik_mono_one text-white">
        How it{" "}
        <span className="relative whitespace-nowrap hover:text-[3.5vw] hover:max-sm:text-[4.5vw] duration-300">
          <span className="absolute bg-red-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
          <span className="relative text-neutral text-white">Works?</span>
        </span>
      </h1>
      <div className="w-[75vw] sm:-[40vw] flex flex-col items-center">
        <h1 className="text-white sm:text-[3vw] mt-4 font-poppins font-bold">
          Step 1
        </h1>
        <p className="max-sm:text-center mt-2 sm:text-[2.5vw] mb-8 font-poppins text-white">
          pick a mood👇
        </p>
        <div className=" ">
          <video
            src="picker_1.mp4"
            alt=""
            autoPlay
            loop
            className="shadow-2xl shadow-slate-600  ring ring-slate-300 rounded-md   w-[600px] "
          />
        </div>
      </div>
      <div className="w-[75vw] sm:-[40vw] flex flex-col items-center">
        <h1 className="text-white mt-8  sm:text-[3vw] font-poppins font-bold text-center">
          Step 2
        </h1>
        <p className="text-white mt-2 mb-8 sm:text-[2.5vw] font-poppins text-center">
          We find a movie😀
        </p>
        <img
          src="step_2_good.png"
          alt=""
          className="rounded-md  shadow-slate-600  shadow-2xl ring ring-slate-300 w-[600px]"
        />
      </div>
      <div className="mb-8 w-[75vw] sm:-[40vw] flex flex-col items-center">
        <h1 className="text-white mt-8 sm:text-[3vw]  font-poppins font-bold text-center ">
          Step 3
        </h1>
        <p className="text-white mb-8 mt-2 sm:text-[2.5vw] font-poppins text-center">
          Enjoy the movie🍿
        </p>
        <div>
          <video
            src="step_3.mp4"
            alt=""
            autoPlay
            loop
            className="shadow-2xl ring  shadow-slate-600  ring-slate-300 rounded-md   w-[600px] "
          />
        </div>
      </div>
    </div>
  );
};
