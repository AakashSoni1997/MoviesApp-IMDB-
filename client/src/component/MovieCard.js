import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useNavigate} from "react-router-dom"

export default function MovieCard({title,description,image,userName,isUser,key}) {
  const navigate=useNavigate()
   
  const handleEdit=()=>{
    navigate(`/mymovies/${key}`)
  }

const handleDelete=()=>{

}

  return (
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
        <Box display ="flex">
          <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><EditIcon/> </IconButton>
          <IconButton  onClick={handleDelete}> <DeleteOutlineIcon/></IconButton>
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
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{userName}</b> {"-> "} {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
