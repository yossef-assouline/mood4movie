import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isToggled, setIsToggled] = useState(false);

  const toggleBoolean = () => {
    setIsToggled((prevValue) => !prevValue);
  };
            
  return (
    <nav>
      <div className="flex relative z-10 shadow-2xl max-sm:h-16 h-[10vh] ">
        <Link href={"/"} className="max-sm:text-2xl lg:text-[2vw] max-xl:text-[2.5vw] text-white self-center ml-4 2xl:text-[1.3vw]">
          Mood<span className="text-red-700">4</span>Movie
        </Link>

        <div className="max-sm:hidden max-lg:text-[2vw] max-xl:text-[1.5vw] 2xl:text-[1vw] xl:text-[1.5vw] flex gap-6 w-full justify-end mr-4 items-center text-md text-white">
          {pathname === "/" ? (
            ""
          ) : (
            <Link
              href="/"
              className="relative max-lg:text-[2vw] max-sm:text-md 2xl:text-[1vw] max-xl:text-[1.5vw] w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              Home
            </Link>
          )}

          {pathname === "/mood-picker" ? (
            ""
          ) : (
            <Link
            href="/mood-picker"
            className="relative max-lg:text-[2vw] max-xl:text-[1.5vw] 2xl:text-[1vw] max-sm:text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Movies
          </Link>
          )}
          <Link
            href="/about"
            className="relative max-sm:text-md w-fit block after:block 2xl:text-[1vw] after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            About
          </Link>

        
        </div>

        <div className="sm:hidden h-16 w-full flex   justify-end relative">
          <button onClick={toggleBoolean} className="ml-16 hidden max-sm:flex">
            {isToggled ? (
              <IoClose className="w-8 h-8 mr-3 self-center justify-end text-white" />
            ) : (
              <FaBars className="w-6 h-6 mr-4 self-center text-white justify-end" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`right-0 text-white sm:hidden transition-all duration-700 ease-in-out ${
          isToggled ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col">
          <li className="text-3xl relative after:bg-red-700 h-20 after:absolute after:h-1 after:w-0 after:bottom-0 flex items-center justify-start after:left-0 hover:after:w-full after:transition-all after:duration-700">
            <Link href="/" className="h-10 ml-4 tracking-tighter">
              Home
            </Link>
          </li>
          <li className="text-3xl relative after:bg-red-700 h-20 after:absolute after:h-1 after:w-0 after:bottom-0 flex items-center justify-start after:left-0 hover:after:w-full after:transition-all after:duration-700">
            <Link href="/about" className="h-10 ml-4 tracking-tighter">
              About
            </Link>
          </li>
          <li className="text-3xl relative after:bg-red-700 h-20 after:absolute after:h-1 after:w-0 after:bottom-0 flex items-center justify-start after:left-0 hover:after:w-full after:transition-all after:duration-700">
            <Link href="/mood-picker" className="h-10 ml-4 tracking-tighter">
              Movies
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
}
