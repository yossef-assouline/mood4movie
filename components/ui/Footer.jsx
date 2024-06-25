import React from "react";
import Link from "next/link";
import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="max-sm:h-36 w-full h-20 left-0 bottom-0  bg-red-700 bg-opacity-30  z-40 flex items-center flex-col justify-center mt-auto">
        
      <ul className="flex gap-8 mb-4">
        <li>
          <Link href={"/"} className="hover:underline text-white">Home</Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:underline text-white">About</Link>
        </li>
        <li>
          <Link href={"/mood-picker"} className="hover:underline text-white">Find A movie</Link>
        </li>
      </ul>
      <h1 className="text-white">Mood4Movie © 2024</h1>
    </footer>
  );
};
