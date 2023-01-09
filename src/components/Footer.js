// Footer

import { getYear } from "../utils/dates";
import { imageFolderPath } from '../globals/globals';

const Footer = () => (
  <footer>
    <p>&copy; {getYear()} SSD - Stephanie Holmes</p>
    <p className="credit-text">Movie data supplied by </p>
    <img className="moviedb-logo" src={`${imageFolderPath}movieDB.png`} alt="MovieDB logo"></img>
  </footer>
);

export default Footer;