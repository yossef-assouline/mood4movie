import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const AboutHero = () => {
  useGSAP(() => {
    gsap.to(".about-h1", { ease:'power1.inOut', y: 0, opacity: 1 }, []);
    gsap.to(".para", {
      delay:0.2,
      y: 0,
      stagger: 0.2,
      opacity: 1, 
      ease:"power2.out"
    });
  });
  
  return (
    <>
      <div className="flex flex-col  justify-center h-[60vh] mt-8 items-center">
        <h1 className="text-white translate-y-4 opacity-0 about-h1 font-rubik_mono_one text-[4vw] xl:text-[3vw] 2xl:text-[2.5vw]">
          <span className="relative whitespace-nowrap hover:text-[5.5vw] xl:hover:text-[4.5vw] 2xl:hover:text-[3vw] duration-300">
            <span className="absolute bg-red-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
            <span className="relative text-neutral text-white ">About</span>
          </span>
        </h1>
        <div className="text-center flex-col flex  items-center mt-8 max-xl:pl-8 max-xl:pr-8">
        <p className="text-white opacity-0 translate-y-4 para font-poppins font-bold xl:text-[1.2vw] xl:w-4/6">Welcome to Mood4Movie, your go-to destination for personalized movie recommendations based on your current mood. Whether you're feeling happy, sad, adventurous, or anything in between, just click on the mood that matches how you're feeling, and we'll suggest the perfect movie to match. </p>
        <p className="text-white opacity-0  translate-y-4 para font-poppins font-bold xl:text-[1.2vw] mt-8 xl:w-4/6">I'm a developer passionate about creating unique and engaging experiences. If you'd like to see more of my work, feel free to visit my <a target="_blank" className="underline  hover:text-red-600 text-red-700" href="https://yossef-port-folio.netlify.app">portfolio</a></p>
        </div>
        
      </div>
    </>
  );
};
