// Page - Movie

import { useEffect, useState } from 'react';
import { appTitle } from '../globals/globals';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieDetail from "../components/MovieDetail";
import { isFavourite } from "../utils/favourites";

const PageMovie = () => {

	const favourites = useSelector((state) => state.favourites.items);
	let { id } = useParams();
	id = id * 1;

	const endPointMovieDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=41b73a2927849ee57e089201cfdc5d95`;

	const endPointMovieImages = `https://api.themoviedb.org/3/movie/${id}/images?api_key=41b73a2927849ee57e089201cfdc5d95`;

	const [movieInfo, setMovieInfo] = useState([]);
	const [movieImages, setMovieImages] = useState([]);

	const fetchMovieInfo = async () => {
		let results = "";
		try {
		  results = await fetch(endPointMovieDetail); 
		  const movieDetail = await results.json();
		  setMovieInfo(movieDetail);		  
		} catch (err) {
		  console.log("error loading movie detail", err, "using defaults");
		}
	};

	const fetchMovieImages = async () => {
		let results = "";
		try {
		  results = await fetch(endPointMovieImages);
		  const movieImgs = await results.json();
		  const movieI = movieImgs.backdrops.slice(1, 7);
		  setMovieImages(movieI);
		  
		} catch (err) {
		  console.log("error loading movie images", err, "using defaults");
		}
	};

	useEffect(() => {
		document.title = `${appTitle} - Movie Info ${id};`}, [id]);

	useEffect(() => {
		fetchMovieInfo()}, [movieInfo]);

	useEffect(() => {
		fetchMovieImages()}, [id]);
	
	return (
		<section>
			<MovieDetail
				key={id}
				movie={movieInfo}
				isFavourite={isFavourite(favourites, null, id)}
				images={movieImages}
          	/>
		</section>
	);
	
};

export default PageMovie;