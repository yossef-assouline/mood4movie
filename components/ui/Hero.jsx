"use client";
import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
    <div className="min-h-screen flex items-center">
    <div className=" transition-transform flex flex-col items-center  -mt-12">
      <h1 className="text-center text-[5vw] leading-relaxed tracking-tighter text-white">
        Find The Perfect movie matching{" "}
        <span className="relative whitespace-nowrap">
          <span className="absolute bg-red-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
          <span className="relative text-neutral text-white">your mood</span>
        </span>
      </h1>
      <p className="text-center mt-16 pl-8 pr-8 text-white">
        Welcome to Mood4Movie, your go-to destination for personalized movie
        recommendations based on your current mood. Whether you're feeling
        happy, sad, adventurous, or anything in between, just click on the mood
        that matches how you're feeling, and we'll suggest the perfect movie to
        match.
      </p>

      <Link href="/mood-picker" className="overflow-hidden flex justify-center items-center mt-16 font-questrial sm:w-48 sm:h-16 w-32  h-12 bg-red-700 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
        Start Now
        <span className="absolute w-36 h-32 -top-16 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
        <span className="absolute w-36 h-32 -top-16 -left-2 bg-red-700 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
        <span className="absolute w-36 h-32 -top-16 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
        <span className="text-center group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute sm:top-5 top-2 left-0 z-10 w-full">
          Start Now
        </span>
      </Link>
    </div> 
    
    </div>
    <hr />
    </>
  );
};
