import mongoose from "mongoose";
import Movie from "../model/Movie";
import User from "../model/User";

export const getAllMovie = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (error) {
    console.log(error);
  }
  if (!movies) {
    return res.status(404).json({ message: "No Movie Found" });
  }
  return res.status(200).json({ movies });
};

export const addMovie = async (req, res, next) => {
  const { title, description, rating, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "unable to find user " });
  }
  const movie = new Movie({
    title,
    description,
    rating,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await movie.save({ session });
    existingUser.movies.push(movie);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return rse.status(500).json({message:error})
  }
  return res.status(200).json({ movie });
};

export const updateMovie = async (req, res, next) => {
  const { title, description } = req.body;
  const movieId = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndUpdate(movieId, { title, description });
  } catch (err) {
    return console.log(err);
  }
  if (!movie) {
    return res.status(500).json({ message: "unable to update Movie" });
  }
  return res.status(200).json({ movie });
};

export const getById = async (req, res, next) => {
  const getId = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(getId);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "no movie found" });
  }
  return res.json({ movie });
};

export const deleteById = async (req, res, next) => {
  const deleteId = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndRemove(deleteId).populate("movie");
    await movie.user.movies.pull(movie)
    await movie.user.save()
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ message: "successfully deleted" });
};



export const getUserById= async (req,res,next)=>{
  const userId=req.params.id
  let userMovies;
  try{
      userMovies= await User.findById(userId).populate("movies")

  }catch(err){
    console.log(err)
  }
  if(!userMovies){
    return res.status(404).json({message:"no movies found"})
  }
  return res.status(200).json({movies:userMovies})
}