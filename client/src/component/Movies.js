import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

const Movies = () => {
  const [movies, setMovies] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:4000/api/movie")
      .catch((err) => console.log(err));
    const data = res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setMovies(data.movies));
  }, []);
  return (
    <Box>
      {movies &&
        movies.map((movie) => (
          <MovieCard
          isUser={localStorage.getItem("userId")===movie?.user?._id}
           key={movie._id}
            title={movie?.title}
            description={movie?.description}
            image={movie?.image}
            userName={movie?.user?.name}
          />
        ))}
    </Box>
  );
};

export default Movies;
