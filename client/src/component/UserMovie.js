import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const UserMovie = () => {
  const [user, setUser] = useState();

  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/movie/user/${id}`)
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
  console.log(user && user.movies,"email");

  return (
    <div>
      {user && user.movies.map((movie)=>{
        return <MovieCard
        key={movie._id}
        id={movie._id}
         isUser={true}
        title={movie.title}
        description={movie.description}
        image={movie.image}
        userName={user.name}
      />
      })}    
    </div>
  );
};

export default UserMovie;
