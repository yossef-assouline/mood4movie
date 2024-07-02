
"use client"
import React from "react";
import { useState, useEffect } from "react";
import { useStore } from "../state/state.store";
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const fetchMovieAndDetails = async (genreId) => {
  const { setMovies, setIsLoading,movies } = useStore.getState();
  const { randomMovie } = useStore.getState();
  const baseUrl = 'https://api.themoviedb.org/3';
  const apiKey = '8c2d0c3c9654a741238fa24bb955a6b4';
  const randomNum = getRandomInt(1,200)
  const endpoint = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${randomNum}&sort_by=popularity.desc&primary_release_date.gte=1995-01-01`;
  setIsLoading(true)

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setMovies(data.results);

    if (data.results && data.results.length > 0) {
      const selectedMovie = data.results[1]; // Using the second movie as per your original logic
      const convertedIds = await convertId(selectedMovie.genre_ids);
      const trailerKey = await fetchTrailer(selectedMovie.id);
      const sliceAtFirstPeriod = text => text.split('.'||'!')[0] + '.'||'!';

      const movie = {
        id: selectedMovie.id,
        title: selectedMovie.title,
        release_date: selectedMovie.release_date.slice(0, 4),
        review: `⭐${selectedMovie.vote_average}/10`,
        tags: convertedIds,
        trailer: `${trailerKey === null ? "" : `https://www.youtube-nocookie.com/embed/${trailerKey}`}`,
        poster:`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`,
        overview:sliceAtFirstPeriod(selectedMovie.overview)
      };
      
      useStore.setState((state)=>({randomMovie : movie}))
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
  } finally{
    setIsLoading(false)
  }
};

export const fetchTrailer = async (movieId) => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const apiKey = '8c2d0c3c9654a741238fa24bb955a6b4';
  const endpoint = `${baseUrl}${movieId}/videos?api_key=${apiKey}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer && trailer.key) {
        return trailer.key;
      }
    }
    console.log('Trailer not found');
    return null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
};

export const convertId = (id_array) => {
  const { imtdb_categories } = useStore.getState();
  const convertedId = [];

  if (Array.isArray(id_array)) {
    id_array.forEach((id) => {
      if (convertedId.length > 3) {
        return;
      }
      convertedId.push(imtdb_categories[id]);
    });
  } else {
    throw new Error("NOT AN ARRAY");
  }
  
  return convertedId.slice(0, 3);
};




