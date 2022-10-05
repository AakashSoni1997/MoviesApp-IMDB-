import React from "react";
import { Route, Routes } from "react-router";
import Auth from "./component/Auth";
import Header from "./component/Header";
import Movies from "./component/Movies";
import UserMovie from "./component/UserMovie";
import MovieDetail from "./component/MovieDetail";
import AddMovie from "./component/AddMovie";
import { useSelector } from "react-redux";




export const App = () => {
  const isLoggedIn=useSelector( state=>state.isLoggedIn);
console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
          <Routes>
              <Route path="/auth" element={<Auth/>} />
              <Route path="/movies/add" element={<AddMovie/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/mymovies" element={<UserMovie/>}/>
              <Route path="/mymovies/:id" element={<MovieDetail/>}/>
          </Routes>


      </main>

    </>
  );
};
export default App;
