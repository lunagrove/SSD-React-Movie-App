// Utilities

function isFavourite(favourites, path, id){
  if(path === '/favourites'){
      return true;
  }
  if(favourites.length === 0){
    return false;
  }
  return favourites.some((movie) => movie.id === id);
}

function getTooltipText(fav) {
  if (fav) {
    return "Remove from favourites";
  }
  else {
    return "Add to favourites"
  }
}

function getImageSource(fav) {
  if (fav) {
    return "red-heart.png";
  }
  else {
    return "redoutline-heart.png"
  }
}
  
export { isFavourite, getTooltipText, getImageSource };