import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  
  image: {
    type: String,
    required: true,
  },
  user:{
    type: mongoose.Types.ObjectId,
    ref:"Movie",
    required:true
  }
});


export default mongoose.model("Movie",movieSchema)



// https://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@github.com/AakashSoni1997/MoviesApp-IMDB_CLONE-.git 
// https://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@github.com/AakashSoni1997/MoviesApp-IMDB_CLONE-.git
// https://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@github.com/AakashSoni1997/MoviesApp-IMDB-.git