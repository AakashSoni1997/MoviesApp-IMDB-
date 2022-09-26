import Movie from "../model/Movie";

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
  const movie = new Movie({
    title,
    description,
    rating,
    image,
    user,
  });

  try {
    await movie.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ movie });
};

export const updateMovie = async (req, res, next) => {
  const {title, description} = req.body;
  const movieId = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndUpdate(movieId, {title,description});
  } catch (err) {
   return console.log(err);
  }
  // if(!movie){
  //  return res.status(500).json({message:"unable to update Movie"})
  // }
    return res.status(200).json({movie}) 

};
