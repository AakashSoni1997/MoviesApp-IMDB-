import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useParams } from "react-router";

const labelStyle = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const MovieDetail = () => {
  const {id}=useParams();
  console.log(id,"idddddddddddddddd");
  const [movie, setMovies] = useState();

  const [inputs, setInputs] = useState();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:4000/api/movie/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setMovies(data.movie);
      setInputs({
        title: data.movie.title,
        description: data.movie.description,
        rating: data.movie.rating,
      });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="linear-gradient(90deg, rgba(14,45,121,1) 34%, rgba(7,6,55,1) 100%)"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"70%"}
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="grey"
              variant="h2"
              textAlign={"center"}
            >
              Post Your Movie
            </Typography>
            <InputLabel sx={labelStyle}> Movie Title</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.title}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={labelStyle}>Rating</InputLabel>
            <TextField
              name="rating"
              onChange={handleChange}
              value={inputs.rating}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={labelStyle}>Description</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.description}
              margin="normal"
              variant="outlined"
            />
            <InputLabel sx={labelStyle}>ImageURL</InputLabel>
            <TextField
              name="imageURL"
              onChange={handleChange}
              value={inputs.imageURL}
              margin="normal"
              variant="outlined"
            />
            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit{" "}
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default MovieDetail;
