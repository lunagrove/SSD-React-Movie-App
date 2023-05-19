// MovieCard

import { Link } from "react-router-dom";
import Favourite from "../components/Favourite";
import { formatDate } from "../utils/dates";
import { imageFolderPath } from '../globals/globals';
import { calculateRating } from "../utils/rating";
import { useDispatch } from "react-redux";
import { addFavourite, deleteFavourite } from "../features/favourites/favouritesSlice";

function MovieCard({ movie, isFavourite }) {

  const dispatch = useDispatch();

  function handleFavouriteClick(addToFav, movie) {
    if (addToFav === true) {
      dispatch(addFavourite(movie));
    } else {
      dispatch(deleteFavourite(movie));
    }
  }
  
  return (
      <div className="card" key={movie.id}>
          <div className="card-content"> 
          <>{movie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster for movie ${movie.title}`}></img>
            ) : (
              <img src={`${imageFolderPath}placeholder.jpg`} alt={`No poster available for movie ${movie.title}`}></img>
            )} </>
            <p>{movie.title}</p>
            <img className="rating" src={`${imageFolderPath}${calculateRating(movie.vote_average)}`} alt={`Rating for movie ${movie.title}`}></img>
          </div>
          <div className="card-overlay fade-effect">
            <div className="favourite-container">
              <div className="favourite-open">
                <Favourite
                  movie={movie}
                  fav={isFavourite}
                  handleFavouriteClick={handleFavouriteClick}
                  classText={"tooltiptext"}
                />                  
              </div>
            </div>
            <p>{`Release date: ${formatDate(movie.release_date)}`}</p>
            <p className="overview">Overview:<br></br>{`${movie.overview}`}</p>
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <button className="learn-more">Learn more...</button>
            </Link>
          </div>
      </div>
  );
}
  
export default MovieCard;