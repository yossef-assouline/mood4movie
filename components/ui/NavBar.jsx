import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

import Link from "next/link";
export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const toggleBoolean = () => {
    setIsToggled((prevValue) => !prevValue);
  };

  return (
    <nav>
      <div className="flex relative z-10 bg-white/20 ring ring-black/5 shadow-2xl backdrop-blur-sm">
        <h1 className="text-2xl text-white self-center ml-4">
          Mood<span className="text-red-700">4</span>Movie
        </h1>

        <div className="h-16 w-full flex justify-end relative">
          <button onClick={toggleBoolean} className="ml-16 hidden max-sm:flex">
            {isToggled ? (
              <IoClose className="w-8 h-8 mr-3 self-center justify-end text-white" />
            ) : (
              <FaBars className="w-6 h-6 mr-4 self-center text-white  justify-end" />
            )}
          </button>
        </div>
      </div>
    

      {isToggled ? (
        <div
          className={`  right-0 text-white sm:hidden transition-transform ${
            isToggled ? "animate-slideDown" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col  ">
            <li
              className={`text-3xl relative  after:bg-red-700 h-20 after:absolute after:h-1 after:w-0 after:bottom-0 flex items-center justify-start after:left-0 hover:after:w-full after:transition-all after:duration-300 `}
            >
              <Link href="/" className="h-10 ml-4 tracking-tighter">
                Home
              </Link>
            </li>
            <li
              className={`text-3xl relative after:bg-red-700 h-20 after:absolute after:h-1 after:w-0 after:bottom-0 flex items-center justify-start after:left-0 hover:after:w-full after:transition-all after:duration-300 `}
            >
              <Link href="/" className="h-10 ml-4 tracking-tighter">
                About
              </Link>
            </li>
            <li
              className={`text-3xl relative  after:bg-red-700  h-20 after:absolute after:h-1 after:w-0 after:bottom-0 flex items-center justify-start after:left-0 hover:after:w-full after:transition-all after:duration-300 `}
            >
              <Link href="/mood-picker" className="h-10 ml-4 tracking-tighter">
                Find a movie
              </Link>
            </li>
          </ul>
        </div>
        
      ) : (
        ""
      )}
      <hr />
    </nav>
  );
}
