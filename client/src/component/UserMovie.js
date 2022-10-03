import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const UserMovie = () => {
  const [user, setUser] = useState();

  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/movie/user/${id}`)
      .catch((err) => {
        console.log(err);
      });
    const data = res.data;
    return data;
  };
  
  useEffect(() => {
    sendRequest().then((data) => {
     setUser(data.user)
    });
  },[]);
  console.log(user);

  return (
    <div>
      {' '}
      {user && user.movies &&
        user. movies.map((movie) => (
          <MovieCard
            key={movie._id}
             isUser={true}
            title={movie.title}
            description={movie.description}
            image={movie.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserMovie;
