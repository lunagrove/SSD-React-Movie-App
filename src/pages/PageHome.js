// Page - Home

import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globals';
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { isFavourite } from "../utils/favourites";

const endPointPopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=41b73a2927849ee57e089201cfdc5d95&sort_by=popularity.desc";

const endPointTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=41b73a2927849ee57e089201cfdc5d95&sort_by=vote_average.desc";

const endPointNowPlayingMovies = "https://api.themoviedb.org/3/movie/now_playing?api_key=41b73a2927849ee57e089201cfdc5d95";

const endPointUpcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?api_key=41b73a2927849ee57e089201cfdc5d95";

const PageHome = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [movieHeading, setMovieHeading] = useState("The 12 Most Popular Movies");

    const favourites = useSelector((state) => state.favourites.items);

    let movieType = "P";

    const fetchMovies = async (mType) => {
      let results = "";
      let movies = [];
      try {
        switch (mType) {
          case "P":
            results = await fetch(endPointPopularMovies);
            setMovieHeading("The 12 Most Popular Movies");
            break;
          case "R":
            results = await fetch(endPointTopRatedMovies);
            setMovieHeading("The 12 Highest Rated Movies");
            break;  
          case "N":
            results = await fetch(endPointNowPlayingMovies); 
            setMovieHeading("The 12 Most Recently Released Movies");
            break;
          case "U":
            results = await fetch(endPointUpcomingMovies); 
            setMovieHeading("The Next 12 Upcoming Movies");
            break;
          default:
            results = [];
        }
        const moviesFull = await results.json();
        movies = moviesFull.results.slice(0, 12);
        setMoviesList(movies);
       
      } catch (err) {
        console.log("error loading movies", err, "using defaults");
      }
    };

    function changeMovieType(mType) {
      movieType = mType;
      console.log("In changeMovieType")
      fetchMovies(mType);
    }

    useEffect(() => {
      console.log("In useEffect")
      fetchMovies(movieType);
    }, [movieType]);

    useEffect(() => {
      document.title = `${appTitle} - Home`;
    }, []);
  
    return (
      <><section className="home-header">
        <h2 className="movie-type">{`${movieHeading}`}</h2>
        <div className="button-bar">
          <button type="button" onClick={() => changeMovieType("P")}>Most Popular</button>
          <button type="button" onClick={() => changeMovieType("R")}>Top Rated</button>
          <button type="button" onClick={() => changeMovieType("N")}>Now Playing</button>
          <button type="button" onClick={() => changeMovieType("U")}>Upcoming</button>
        </div>
      </section>
      <div className="cards">
        {moviesList.length && moviesList.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavourite={isFavourite(favourites, null, movie.id)}
          />
        ))}
      </div></>
    );
};

export default PageHome;
