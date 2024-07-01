import React, { useEffect , useState } from "react";
import { useStore } from "../../state/state.store";
import { fetchMovie,convertId } from "@/lib/movieUtils";
export const Picker = () => {
  const categories = [
    { name: "Scared😱" ,id:'27' },
    { name: "Thrilled😲" ,id:'53' },
    { name: "Happy😊" ,id:'35'},
    { name: "Amused😂", id:'10751'},
    { name: "Adventurous🏔️",id:'12'},
    
  ];

  const setMoodSelected = useStore((state) => (state.setMoodSelected))
  const movies = useStore((state) => (state.movies))
  
  
  
  
  

  
  return (
    <>
      <div className="max-sm:flex max-sm:flex-col items-center  max-sm:mt-8 max-sm:min-h-screen">
        <h1 className="text-white text-2xl">I want to be:</h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          {categories.map((categorie) => (
            <button
              key={categorie.name}
              onClick={()=>{setMoodSelected(categorie.name)
                fetchMovie(categorie.id)
                              
              }}
              href="/mood-picker"
              className="overflow-hidden flex justify-center items-center mt-16 font-questrial w-32  h-12 bg-red-700 text-white border-none rounded-md text-l font-bold cursor-pointer relative z-10 group"
            >
              {categorie.name}
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-700 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="text-center group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-0 z-10 w-full">
                {categorie.name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};
