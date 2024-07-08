import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Explaination = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useGSAP(() => {
    // Animate title
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // Animate steps
    [step1Ref, step2Ref, step3Ref].forEach((ref, index) => {
      const textElements = ref.current.querySelectorAll('h1, p');
      const mediaElement = ref.current.querySelector('video, img');

      gsap.from(textElements, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        },
      });

      gsap.from(mediaElement, {
        x: index % 2 === 0 ? 100 : -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          end: "top 30%",
          scrub: 1,
        },
      });
    });
  }, { scope: containerRef }); // Scope the animations to the container

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center mt-12 mb-8">
      <h1 ref={titleRef} className="text-[3vw] max-sm:text-[4vw] font-rubik_mono_one text-white">
        How it{" "}
        <span className="relative whitespace-nowrap hover:text-[3.5vw] hover:max-sm:text-[4.5vw] duration-300">
          <span className="absolute bg-red-700 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
          <span className="relative text-neutral text-white">Works?</span>
        </span>
      </h1>
      <div ref={step1Ref} className="w-[75vw] sm:-[40vw] flex flex-col items-center">
        <h1 className="text-white sm:text-[3vw] mt-4 font-poppins font-bold">
          Step 1
        </h1>
        <p className="max-sm:text-center mt-2 sm:text-[2.5vw] mb-8 font-poppins text-white">
          pick a mood👇
        </p>
        <div>
          <video
            src="picker_1.mp4"
            alt=""
            autoPlay
            loop
            muted
            className="shadow-2xl shadow-slate-600 ring ring-slate-300 rounded-md w-[600px]"
          />
        </div>
      </div>
      <div ref={step2Ref} className="w-[75vw] sm:-[40vw] flex flex-col items-center">
        <h1 className="text-white mt-8 sm:text-[3vw] font-poppins font-bold text-center">
          Step 2
        </h1>
        <p className="text-white mt-2 mb-8 sm:text-[2.5vw] font-poppins text-center">
          We find a movie😀
        </p>
        <img
          src="step_2_good.png"
          alt=""
          className="rounded-md shadow-slate-600 shadow-2xl ring ring-slate-300 w-[600px]"
        />
      </div>
      <div ref={step3Ref} className="mb-8 w-[75vw] sm:-[40vw] flex flex-col items-center">
        <h1 className="text-white mt-8 sm:text-[3vw] font-poppins font-bold text-center">
          Step 3
        </h1>
        <p className="text-white mb-8 mt-2 sm:text-[2.5vw] font-poppins text-center">
          Enjoy the movie🍿
        </p>
        <div>
          <video
            src="step_3.mp4"
            alt=""
            autoPlay
            loop
            muted
            className="shadow-2xl ring shadow-slate-600 ring-slate-300 rounded-md w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};