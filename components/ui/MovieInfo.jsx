import React, { useState } from "react";
import { Badge } from "./badge";
import { useStore } from "../../state/state.store";
import { useEffect } from "react";
import Image from "next/image";
import { Loader } from "./Loader";
export const MovieInfo = () => {
  
  const randomMovie = useStore((state) => (state.randomMovie))
  const isLoading = useStore((state) => (state.isLoading))

  useEffect(() => {console.log(isLoading)},[isLoading])
  return (
    
    <div className="flex max-sm:justify-center  items-center flex-col bg-white/20 ml-8 mr-8 mt-16 max-sm:h-96 rounded-md ring ring-black/5 shadow-2xl backdrop-blur-sm">
      {isLoading  ? <Loader/> : 
      <div className="max-sm:w-5/6 flex flex-col items-center">
        <div className="youtube-wrapper overflow-hidden w-full shadow-[0_1px_30px_rgba(185,28,28)] relative">
          <iframe            
            className="youtube-embed rounded-md "
            src={randomMovie.trailerKey}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <h1 className="max-sm:text-center mt-4 text-white text-xl">
          {randomMovie.title}
        </h1>
        <ul className="flex gap-8 text-white">
          <li>{randomMovie.release_date}</li>

          <li>{randomMovie.review}</li>
        </ul>
        <ul className="flex flex-wrap gap-2 justify-center">
          {randomMovie.tags?.map((tag) => (
            <li>
            <Badge variant="destructive">{tag}</Badge>
            </li>
          ))}
         
        </ul>
      </div>}
    </div>
  )
};
