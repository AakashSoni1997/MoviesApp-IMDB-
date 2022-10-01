import express from "express";
import { addMovie, deleteById, getAllMovie, getById, getUserById, updateMovie } from "../app/controller/Movie-controller";

const movieRouter=express.Router();

 movieRouter.get("/",getAllMovie);
 movieRouter.post("/add",addMovie);
 movieRouter.put("/update/:id",updateMovie);
 movieRouter.get("/:id",getById);
 movieRouter.delete("/:id", deleteById);
 movieRouter.get("/user/:id",getUserById)

export default movieRouter