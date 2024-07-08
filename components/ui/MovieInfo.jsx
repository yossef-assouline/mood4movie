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

  return moodSelected ? (
    <>
      <div className="flex justify-center  lg:gap-8">
        <div className="self-center max-lg:hidden">
          {isLoading ? (
            ""
          ) : (
            <Image
              className={`rounded-xl max-lg:hidden shadow-xl hover:scale-105 duration-300
              
            ${randomMovie.trailer === "" ? "hidden" : ""}  mt-16`}
              src={randomMovie.poster}
              width={300}
              height={100}
              alt=""
            ></Image>
          )}
        </div>
        <div className={`flex justify-center ${isLoading ? "w-2/3" : ""} lg:w-7/12 xl:w-5/12 items-center flex-col bg-white/10 max-lg:ml-8 max-lg:mr-8 mt-16 min-h-96 rounded-md ring ring-black/5 shadow-2xl backdrop-blur-sm`}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="w-5/6 sm:w-5/6 flex  flex-col items-center">
              <div className="hidden lg:block"></div>
              <div
                className={`${
                  randomMovie.trailer === ""
                    ? "rounded-xl max-sm:w-[40vw] lg:w-[40vh] "
                    : "youtube-wrapper"
                } overflow-hidden w-full mt-8 mb-4 bg-white/10 relative`}
              >
                {randomMovie.trailer === "" ? (
                  <div className="">
                    <Image
                      className="rounded-xl max-sm:w-full w-[40vh]"
                      src={randomMovie.poster}
                      width={200}
                      height={100}
                      alt=""
                    ></Image>
                  </div>
                ) : (
                  <iframe
                    className="youtube-embed rounded-md "
                    src={randomMovie.trailer}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <h1 className="text-center mt-4 text-white text-xl sm:text-[3vw] lg:leading-tight font-poppins font-bold lg:text-[1.5vw]">
                {randomMovie.title}
              </h1>
              <ul className="flex gap-8 text-white">
                <li key={"date"} className="sm:text-[2vw] font-poppins lg:text-[1vw]">
                  {randomMovie.release_date}
                </li>

                <li key={"review"} className="sm:text-[2vw] font-poppins lg:text-[1vw]">
                  {randomMovie.review}
                </li>
              </ul>
              <ul className="flex flex-wrap gap-2 font-poppins font-bold justify-center">
                {randomMovie.tags?.map((tag) => (
                  <li key={tag}>
                    <Badge variant="destructive">{tag}</Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-white font-poppins font-bold text-xs mb-4">
                {randomMovie.overview}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
