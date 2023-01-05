// Footer

import { getYear } from "../utils/dates";

const Footer = () => (
  <footer>
    <p>&copy; {getYear()} SSD - Stephanie Holmes</p>
    <p className="credit-text">Movie data supplied by </p>
    <img className="moviedb-logo" src="../assets/images/movieDB.svg" alt="MovieDB logo"></img>
  </footer>
);

export default Footer;