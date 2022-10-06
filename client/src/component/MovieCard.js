import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const  MovieCard =({
  title,
  description,
  image,
  userName,
  isUser,
  id,
})=>
{
  const navigate = useNavigate();
  console.log(id,"id")

  const handleEdit = () => {
    navigate(`/mymovies/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/movie/${id}`)
      .catch((err) => console.log(err)); 
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))  
      .then(() => navigate("/movies"));
  };

  return (
    <>
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <EditIcon  color="warning"/>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteOutlineIcon  color="error"/>
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={title}
      />
      <CardMedia component="img" height="194" image={image} />
      <CardContent>
        <hr />
        <br />
        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b> {"-> "} {description}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}


export default MovieCard