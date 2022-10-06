import express from "express";
import MoviesDB from "./config/database";
import movieRouter from "./routes/Movie-route";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/movie", movieRouter);

MoviesDB();

const port = 5000;

// for showing data in termial
app.use(function (req, res, next) {
  console.log(`${req.method}-${req.url}-${req.ip}-${new Date()}`);
  next();
});

app.listen(port, () => {
  console.log("this server is running on port 5000");
});

// !XBpN-.YymngL8h
