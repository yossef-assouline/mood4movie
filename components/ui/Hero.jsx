"use client";
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-text", { ease:'power1.inOut', y: 0, opacity: 1 }, []);
    gsap.to("#hero-paragraph", { ease:'power1.inOut', y: 0, opacity: 1 ,delay:0.1}, []);
    gsap.to("#hero-button", { ease:'power1.inOut', y: 0, opacity: 1 ,delay:0.1}, []);
  });

  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className=" transition-transform flex flex-col items-center  -mt-12">
          <h1
            id="hero-text"
            className="opacity-0 font-rubik_mono_one  translate-y-5 text-center text-[5vw] xl:text-[4vw] 2xl:text-[3vw] 2xl:pl-8 2xl:pr-8 leading-relaxed tracking-tighter text-white "
          >
            Find The Perfect movie matching{" "}
            <span className="relative whitespace-nowrap hover:text-[5.5vw] xl:hover:text-[4.5vw] 2xl:hover:text-[3.5vw] duration-300">
              <span className="absolute bg-red-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
              <span className="relative text-neutral text-white ">
                your mood
              </span>
            </span>
          </h1>
          <p id="hero-paragraph" className="text-center font-poppins font-bold opacity-0 translate-y-5 mt-16 pl-8 pr-8 text-white xl:text-[1.2vw] xl:w-4/6">
            Welcome to Mood4Movie, your go-to destination for personalized movie
            recommendations based on your current mood. Whether you're feeling
            happy, sad, adventurous, or anything in between, just click on the
            mood that matches how you're feeling, and we'll suggest the perfect
            movie to match.
          </p>

          <Link
            id="hero-button"
            href="/mood-picker"
            className="overflow-hidden opacity-0 translate-y-5 flex font-poppins font-bold justify-center hover:scale-105 duration-300 items-center mt-16  sm:w-48 sm:h-16 w-32  h-12 bg-red-700 text-white border-none rounded-md text-xl  cursor-pointer relative z-10 group"
          >
            Start Now
            <span className="absolute w-36 h-32 -top-16 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-16 -left-2 bg-red-700 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-16 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="text-center group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute sm:top-5 top-2 left-0 z-10 w-full ">
              Start Now
            </span>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};
