// Page - About

import { useEffect } from 'react';
import { appTitle, imageFolderPath } from '../globals/globals';

const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

	return (
		<>
			<h2 className="page-header">About Page</h2>
			<p>This application uses the Movie DB to display 12 movies in different categories:</p>
			<ul>
				<li>Most popular</li>
				<li>Most highly rated</li>
				<li>Now playing in theatres</li>
				<li>Upcoming</li>
			</ul>
			<p>	Users can view individual movie details, and flag movies as favourites.
			</p>
			<p className="about-text">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
			<img className="moviedb-logo2-about" src={`${imageFolderPath}movieDB.svg`} alt="MovieDB logo"></img>
			<p>Background image - Photo by <a className="image-credit-about" href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Thomas</a> on <a className="image-credit-about" href="https://unsplash.com/s/photos/starry-night-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
		</>
	);
	
};

export default PageAbout;