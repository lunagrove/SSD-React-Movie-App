// Favourite

import { getTooltipText, getImageSource } from "../utils/favourites";
import { imageFolderPath } from '../globals/globals';

function Favourite({ movie, fav, handleFavouriteClick, classText }) {

    function handleAddFavourite() {
        handleFavouriteClick(true, movie);
    }
  
    function handleRemoveFavourite() {
        handleFavouriteClick(false, movie);
    }
  
    return (
      <>
        {fav === false ? (
          <button className="favourite-button" onClick={handleAddFavourite}>
		        <img src={`${imageFolderPath}${getImageSource(false)}`} alt={`Favourite icon for ${movie.title}`}></img>
		        <span className={`${classText}`}>{`${getTooltipText(false)}`}</span>
          </button>
        ) : (
          <button className="favourite-button" onClick={handleRemoveFavourite}>
		        <img src={`${imageFolderPath}${getImageSource(true)}`} alt={`Favourite icon for ${movie.title}`}></img>
		        <span className={`${classText}`}>{`${getTooltipText(true)}`}</span>
          </button>
        )}
      </>
    );
  }
  
  Favourite.defaultProps = {
    remove: false,
  };
  
  export default Favourite;

