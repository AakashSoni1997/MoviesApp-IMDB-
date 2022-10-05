import mongoose, { Mongoose } from "mongoose"

  const MoviesDB=()=>{
    // mongoose.connect("mongodb://localhost:27017/moviesapp2022")
    mongoose.connect("mongodb+srv://aakash:as1997@movies-cluster.lnkqfix.mongodb.net/test")
    .then(()=>{
        console.log("Server is connected to mongoDB atlas")
    })
    .catch((err)=>{
        console.log(err.message)
    })

}


export default MoviesDB
