import React, { useEffect, useState, useRef } from "react";
import { useStore } from "../../state/state.store";
import { fetchMovieAndDetails } from "@/lib/movieUtils";

export const Picker = () => {


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
      <div className="flex flex-col items-center max-sm:h-[60vh]  justify-center sm:mb-24 sm:mt-24 max-sm:mb-4">
        <h1 className="text-white text-2xl sm:-mb-8">Pick A genre:</h1>
        <div className="flex flex-wrap gap-4 justify-center  sm:pl-2 sm:pr-2">
          {categories.map((categorie) => (
            <button
              key={categorie.name}
              onClick={() => {
                setMoodSelected(categorie.name);
                fetchMovieAndDetails(categorie.id);
              }}
              href="/mood-picker"
              className="overflow-hidden hover:scale-105 duration-300 flex justify-center items-center mt-16 font-questrial sm:w-48 sm:h-16 w-32  h-12 bg-red-700 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
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
