import React from "react";

export const Explaination = () => {
  return (
    
      <div className="flex flex-col max-sm:items-center max-sm:text-center mt-8 mb-8 ">
        <h1 className="text-2xl text-white">
          How it{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute bg-red-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
            <span className="relative text-neutral text-white">Works?</span>
          </span>
        </h1>
        <div className="">
        <h1 className="text-white mt-4">Step 1</h1>
        <p className="max-sm:text-center mt-2 mb-8 text-white">pick a mood👇</p>
         <img src="https://placehold.co/350x200?text=Step+1" alt="" className="rounded-md" />
        </div>
        <div className="">
        <h1 className="text-white mt-8 text-center">Step 2</h1>
        <p className="text-white mt-2 mb-8 text-center">We will pick a movie <br/>matching your mood 😀😫😱</p>
        <img src="https://placehold.co/350x200?text=Step+2" alt="" className="rounded-md" /> 
        </div>
        <div className="">
        <h1 className="text-white mt-8 text-center ">Step 3</h1>
        <p className="text-white mb-8 mt-2 text-center">Enjoy the movie🍿</p>
        <img src="https://placehold.co/350x200?text=Step+3" alt="" className="rounded-md"/>  
        </div>
        
      </div>
    
  );
};
