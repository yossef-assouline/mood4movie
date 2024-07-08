import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
export const Footer = () => {
  const pathname = usePathname();
  return (
    
    <footer className="max-sm:h-36 w-full h-20 left-0 bottom-0 bg-white/20 ring ring-black/5 shadow-2xl backdrop-blur-sm z-40 flex items-center flex-col justify-center mt-auto">
      <ul className="flex mb-4 font-poppins gap-8 font-bold">
        <li>
        {pathname === "/" ? (
            ""
          ) : (
            <Link
              href="/"
              className="relative text-white text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              Home
            </Link>
          )}
          
        </li>
        <li>
        {pathname === "/mood-picker" ? (
            ""
          ) : (
            <Link
            href="/mood-picker"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Movies
          </Link>
          )}
        </li>
        <li>
        {pathname === "/about" ? 
          ""
          :<Link
          id="nav-about"
          href="/about"
          className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          About
        </Link>}
        </li>
      </ul>
      <h1 className="text-white font-poppins">Mood4Movie © 2024</h1>
    </footer>
  );
};
