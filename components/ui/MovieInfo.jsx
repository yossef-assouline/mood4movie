import React from "react";
import { Badge } from "./badge";
export const MovieInfo = () => {
  return (
    <div className="flex max-sm:justify-center  items-center flex-col bg-white/20 ml-8 mr-8 mt-16 max-sm:h-96 rounded-md ring ring-black/5 shadow-2xl backdrop-blur-sm">
      <div className=" border-white w-3/3">
        <img
          src="https://placehold.co/300x200"
          className="flex"
          alt=""
        />
        <h1 className="text-left mt-4 text-white text-xl">Titanic</h1>
        <ul className="flex gap-3 text-white">
          <li>2009</li>
          <li>2h05</li>
          <li>⭐9.5/10</li>
        </ul>
        <ul className="flex flex-wrap gap-6">
          <li>
            <Badge variant="destructive">Drama</Badge>
          </li>
          <li>
            <Badge>Drama</Badge>
          </li>
          <li>
            <Badge>Drama</Badge>
          </li>
          
          
          
          
          
          
          
        </ul>
      </div>
    </div>
  );
};
