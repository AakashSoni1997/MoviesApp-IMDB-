import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Auth from "./component/Auth";
import Header from "./component/Header";
import Movies from "./component/Movies";
import UserMovie from "./component/UserMovie";
import MovieDetail from "./component/MovieDetail";
import AddMovie from "./component/AddMovie";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

export const App = () => {
  const dispatch=useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

useEffect(() => {
  
if(localStorage.getItem("userId")){
  dispatch(authActions.login())
}

  }
, [dispatch])



  return (
    <>
      <header> 
        <Header />
      </header>

      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/mymovies" element={<UserMovie />} />
              <Route path="/mymovies/:id" element={<MovieDetail />} />
              {""}
            </>
          )}
        </Routes>
      </main>
    </>
  );
};
export default App;
