// Header
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { appTitle } from "../globals/globals";

const NavItems = ({ closeDropdown }) => {

  return (
    <ul>
      <li>
        <NavLink to="/" onClick={closeDropdown}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/favourites" onClick={closeDropdown}>Favourites</NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={closeDropdown}>Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={closeDropdown}>About</NavLink>
      </li>
    </ul>
  );
};

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false); 
  };

  function blur(e) {
    e.target.blur();
  }

  return (
    <>
      <header>
        <div className="hamburger-menu">
          <button className={`btn-menu ${isOpen ? 'show' : ''}`} id="btn-menu" onClick={handleMenuToggle}>
            <span className="button-content" tabIndex="-1">
                <span className="sr-only">Menu</span>
                <span className={`bar ${isOpen ? 'show' : ''}`} id="bar"></span>
            </span>
          </button>
            <div className={`dropdown ${isOpen ? 'show' : 'hide'}`} onClick={closeDropdown}>
              <NavItems closeDropdown={closeDropdown} />
            </div>
        </div>
        <h1><Link to="/">{appTitle}</Link></h1>
      </header>
      {!isOpen && (
        <div className="main-nav" id="main-navigation" onClick={blur}>
          <NavItems closeDropdown={closeDropdown} />
        </div>
      )}
    </>
  );
};

export default Header;