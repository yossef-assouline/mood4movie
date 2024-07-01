
"use client"
import React from "react";
import { useState } from "react";
import { useStore } from "../state/state.store";

export const fetchMovie = async (genreId) => {
  const setMovies = useStore.getState().setMovies
  const movies = useStore.getState().movies
  const baseUrl = 'https://api.themoviedb.org/3';
  const apiKey = '8c2d0c3c9654a741238fa24bb955a6b4'
  const endpoint = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc`

  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  setMovies( data.results )
  convertId(movies[1]?.genre_ids)
  fetchTrailer(movies[1]?.id)
}


export const fetchTrailer = async (movieId) => {

  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const apiKey = '8c2d0c3c9654a741238fa24bb955a6b4'
  const endpoint = `${baseUrl}${movieId}/videos?api_key=${apiKey}`
  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    if (trailer) {
      useStore.getState().setRandomMovie(trailer.key)
    } else {
        console.log('Trailer not found');
    }

  
  
}}


export const convertId = (id_array) => {
  const convertedId = []
  const imtdb_categories = useStore.getState().imtdb_categories;
  if(Array.isArray(id_array)){
    id_array.forEach((id)=>{
      if(convertedId.length > 3){
        return
      }
      convertedId.push(imtdb_categories[id])
      })
  }
  else {
    throw new Error("NOT AN ARRAY")
  }   
    useStore.setState((state)=>({movie_id:convertedId.slice(0,3)}))
    createMovie()
}

export const createMovie = () => {
  const movies = useStore.getState().movies
  const movie_id = useStore.getState().movie_id

  
  const movie = {
    id : movies[1]?.id,
    title : movies[1]?.title,
    release_date : movies[1]?.release_date.slice(0, 4),
    review : `⭐${movies[1]?.vote_average}/10`,
    tags : movie_id,
    
  }
  useStore.setState((state)=>({randomMovie : movie}))
}

