// Header

import { Link } from 'react-router-dom';
import Nav from "./Nav";
import { appTitle } from "../globals/globals";

const Header = () => {
  return (
    <>
      <header>
        <button className="btn-menu" id="btn-menu">
            <span className="button-content" tabIndex="-1">
            <span className="sr-only">Menu</span>
            <span className="bar" id="bar"></span> </span>
        </button>
        <h1><Link to="/">{appTitle}</Link></h1>
      </header>
      <Nav />
    </>
  );
};

export default Header;