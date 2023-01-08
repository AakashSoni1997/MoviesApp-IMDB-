import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Movies = () => {
  const [movies, setMovies] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://server-pi-blush.vercel.app/api/movie")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(res.data);
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setMovies(data.movies));
  }, []);
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <MovieCard
            id={movie?._id}
            isUser={localStorage.getItem("userId") === movie?.user?._id}
            title={movie?.title}
            description={movie?.description}
            image={movie?.image}
            userName={movie?.user?.name}
          />
        ))}
    </>
  );
};

export default Movies;
