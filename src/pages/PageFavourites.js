// Page - Favourites

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const PageFavourites = () => {

	const favourites = useSelector((state) => state.favourites.items);

	useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

	return (
	  <><section>
			<h2 className="page-header">Favourites</h2>
		</section>

		{favourites.length < 1 ? (
         <> <p>You have no favourite movies. Return to the home page to add some favourite movies.</p><br></br>
			<Link to={"/"}>
				<button className="back-home">Back to home</button>
			</Link> </>
        ) : (
			<div className="cards">
				{favourites.length && favourites.map(movie => (
					<MovieCard
						key={movie.id}
						movie={movie}
						isFavourite={true}
					/>
				))} 
			</div>
		)}
		</>
	)
};

export default PageFavourites;