import React, { useEffect } from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
  const id=useParams().id
  console.log(id)
  useEffect(() => {
   
  }, [])
  
  return (
    <div>
      <h2>MovieDetail</h2>
    </div>
  );
};

export default MovieDetail; 
