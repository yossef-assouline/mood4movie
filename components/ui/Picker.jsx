import React, { useEffect, useState, useRef } from "react";
import { useStore } from "../../state/state.store";
import { fetchMovieAndDetails } from "@/lib/movieUtils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Picker = () => {
  useGSAP(() => {
    gsap.to(".picker-button", {
      y: 0,
      stagger: 0.1,
      opacity: 1, 
      ease:"power2.out"
    });
    gsap.to(".picker-h1", {
      y: 0,
      opacity: 1,
      duration:1
    });
  });

  const categories = [
    { name: "Horror😱", id: "27" },
    { name: "Thriller😲", id: "53" },
    { name: "Comedy😂", id: "35" },
    { name: "Adventure🏔️", id: "12" },
    { name: "Fantasy🌌", id: "14" },
    { name: "Romance😍", id: "10749" },
    { name: "Sci-fi👽", id: "878" },
    { name: "Action🔫", id: "28" },
  ];
  const setMoodSelected = useStore((state) => state.setMoodSelected);

  return (
    <>
      <div className="flex flex-col items-center h-[50vh]  justify-center sm:mb-24  max-sm:mb-4 ">
        <h1
          
          className="text-white opacity-0 picker-h1 max-sm:text-[4vw] text-[3vw] mt-24 font-poppins font-bold max-sm:mb-2 "
        >
          Pick a genre:
        </h1>
        <div className="flex flex-wrap gap-4 justify-center max-sm:mb-24 sm:pl-2 lg:mb-32 sm:pr-2  xl:mt-16">
          {categories.map((categorie) => (
            <button
              key={categorie.name}
              onClick={() => {
                setMoodSelected(categorie.name);
                fetchMovieAndDetails(categorie.id);
              }}
              href="/mood-picker"
              className="overflow-hidden font-poppins opacity-0 picker-button hover:scale-105 duration-300 flex justify-center items-center mt-4  sm:w-48 sm:h-16 w-32  h-12 bg-red-700 text-white border-none rounded-md text-md font-bold cursor-pointer relative z-10 group"
            >
              {categorie.name}
              <span className="absolute w-36 h-32 -top-16 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-16 -left-2 bg-red-700 rotate-12 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-16 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="text-center group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute sm:top-5 top-2 left-0 z-10 w-full">
                {categorie.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
