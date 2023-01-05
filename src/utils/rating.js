let stars = [];
    stars[0] = "ratings-nostar.jpg";
    stars[1] = "ratings-halfstar.jpg";
    stars[2] = "ratings-1star.jpg";
    stars[3] = "ratings-1andhalfstar.jpg";
    stars[4] = "ratings-2star.jpg";
    stars[5] = "ratings-2andhalfstar.jpg";
    stars[6] = "ratings-3star.jpg";
    stars[7] = "ratings-3andhalfstar.jpg";
    stars[8] = "ratings-4star.jpg";    
    stars[9] = "ratings-4andhalfstar.jpg"; 
    stars[10] = "ratings-5star.jpg";


function calculateRating(rating) {
    let i = Math.round(rating);
    const decimalPart = i.toString().split(".")[1];
    if (decimalPart === 5) {
      i = i + 0.5;
    }
    const imagePath = stars[i];
    return imagePath;
  }

  export { calculateRating };