"use client";
import { Footer } from "@/components/ui/Footer";
import Navbar from "@/components/ui/NavBar";
import React from "react";
import { Picker } from "@/components/ui/Picker";
import { MovieInfo } from "@/components/ui/MovieInfo";

export const MoodPicker = () => {
  return (
    <>
      <Navbar />
      <MovieInfo />
      <Picker />
      <Footer />
    </>
  );
};

export default MoodPicker;
