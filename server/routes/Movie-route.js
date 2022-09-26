import express from "express";
import { addMovie, getAllMovie, updateMovie } from "../app/controller/Movie-controller";

const movieRouter=express.Router();

 movieRouter.get("/",getAllMovie);
 movieRouter.post("/add",addMovie);
 movieRouter.put("/update/:id",updateMovie)


export default movieRouter