// Page - Not Found

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle, imageFolderPath } from '../globals/globals';

const PageNotFound = () => {

	useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);
    
	return (
		<section className="section-404">
			<h2>404</h2>
			<img src={`${imageFolderPath}sad-face.png`} alt={`Sad face emoji`}></img>
			<p>Sorry, we could not find this page.</p>
			<Link to={"/"}>
				<button className="back-home">Back to home</button>
			</Link>
		</section>
	);
	
};

export default PageNotFound;