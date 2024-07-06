import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/home/home.js';
import Header from "./components/header/header.js";
import MovieList from './components/movieList/movieList.js';
import Movie from './pages/movieDetail/movie.js';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route> 
        </Routes>
     </Router> 
      </div>
  )
}

export default App;
