import React, { useState } from "react";
import { Badge } from "./badge";
import { useStore } from "../../state/state.store";
import { useEffect } from "react";
import Image from "next/image";
import { Loader } from "./Loader";
export const MovieInfo = () => {
  const randomMovie = useStore((state) => state.randomMovie);
  const isLoading = useStore((state) => state.isLoading);
  const moodSelected = useStore((state) => state.moodSelected);
  // useEffect(() => {console.log(isLoading)},[isLoading])
  return moodSelected ? (
    <>
      {isLoading ? (
        ""
      ) : (
        <div className="max-sm:hidden">
          <Image
            className="rounded-xl w-48"
            src={randomMovie.poster}
            width={200}
            height={100}
          ></Image>
        </div>
      )}
      <div className="flex justify-center  items-center flex-col bg-white/20 ml-8 mr-8 mt-16 min-h-96 rounded-md ring ring-black/5 shadow-2xl backdrop-blur-sm">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-5/6 flex flex-col items-center">
            <div
              className={`${
                randomMovie.trailer === ""
                  ? "rounded-xl max-sm:w-[40vw] w-[25vw] "
                  : "youtube-wrapper"
              } overflow-hidden w-full mt-8 mb-4 bg-white/10 relative`}
            >
              {randomMovie.trailer === "" ? (
                <div className="">
                  <Image
                    className="rounded-xl w-full"
                    src={randomMovie.poster}
                    width={200}
                    height={100}
                  ></Image>
                </div>
              ) : (
                <iframe
                  className="youtube-embed rounded-md "
                  src={randomMovie.trailer}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              )}
            </div>
            <h1 className="text-center mt-4 text-white text-xl sm:text-[3vw]">
              {randomMovie.title}
            </h1>
            <ul className="flex gap-8 text-white">
              <li className="sm:text-[2vw]">{randomMovie.release_date}</li>

              <li className="sm:text-[2vw]">{randomMovie.review}</li>
            </ul>
            <ul className="flex flex-wrap gap-2 justify-center">
              {randomMovie.tags?.map((tag) => (
                <li>
                  <Badge variant="destructive">{tag}</Badge>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-white text-xs mb-4">
              {randomMovie.overview}
            </p>
          </div>
        )}
      </div>
    </>
  ) : (
    ""
  );
};
