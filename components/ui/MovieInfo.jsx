import React, { useState } from "react";
import { Badge } from "./badge";
import { useStore } from "../../state/state.store";
import { useEffect } from "react";
import Image from "next/image";
export const MovieInfo = () => {

  const movie_id = useStore((state) => (state.movie_id))
  const moodSelected = useStore((state) => state.moodSelected);
  const movies = useStore((state) => state.movies);
  const randomMovie = useStore((state) => (state.randomMovie))

  // useEffect(() => {
  //   console.log(randomMovie)
  // },[randomMovie])
  return moodSelected ? (
    <div className="flex max-sm:justify-center  items-center flex-col bg-white/20 ml-8 mr-8 mt-16 max-sm:h-96 rounded-md ring ring-black/5 shadow-2xl backdrop-blur-sm">
      <div className="max-sm:w-5/6 flex flex-col items-center">
        <div className="youtube-wrapper overflow-hidden w-full shadow-[0_1px_30px_rgba(185,28,28)] relative">
          <iframe            
            className="youtube-embed rounded-md "
            src={randomMovie.trailer}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>

        {/* <Image
          src={`${baseUrl}${movies[1].poster_path}`}
          className="w-4/12 rounded-md"
          width={300}
          height={200}
          alt=""
        /> */}

        <h1 className="max-sm:text-center mt-4 text-white text-xl">
          {randomMovie.title}
        </h1>
        <ul className="flex gap-3 text-white">
          <li>{randomMovie.release_date}</li>
          <li>2h05</li>

          <li>{randomMovie.review}</li>
        </ul>
        <ul className="flex flex-wrap gap-2 justify-center">
          {movie_id.map((id_name) => (
            <li>
            <Badge variant="destructive">{id_name}</Badge>
            </li>
          ))}
         
        </ul>
      </div>
    </div>
  ) : (
    ""
  );
};
