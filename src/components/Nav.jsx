import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Nav = ({ numberOfItems }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = () => {
    scroll.scrollTo("find", {
      smooth: true,
      offset: -50, // Adjust the offset as needed to account for any fixed headers
    });
  };

  return (
    <header>
      <Link to="/" className="logo">
        <FontAwesomeIcon className="red" icon={faShoppingCart} />
        BAR<span className="red">UCH</span>
      </Link>
      <ul className="nav__links">
        <div
          id="menu-bar"
          className={`fas ${isActive ? "fa-times" : "fa-bars"}`}
          onClick={toggleMenu}
        >
          {isActive ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <Link to="/" className="a">
            Home
          </Link>
          <Link to="/books" className="a">
            All Items
          </Link>
          <Link to="/about" className="a">
            About
          </Link>
        </nav>
        <Link to="/cart">
          <div className="cart__icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </div>
        </Link>
      </ul>
    </header>
  );
};

export default Nav;

<header>
  <Link className="a logo" to="/">
    <FontAwesomeIcon className="red" icon="shopping-cart" />
    BAR<span className="red">UCH</span>
  </Link>
  <nav>
    <ul className="nav__links">
      <li className="nav__list">
        <Link to="/" className="a">
          Home
        </Link>
      </li>
      <li className="nav__list">
        <Link to="/books" className="a">
          Find Us
        </Link>
      </li>
      <li className="nav__list">
        <Link to="/books" className="a">
          About
        </Link>
      </li>
      <li className="nav__list">
        <Link to="/books" className="a">
          Order
        </Link>
      </li>
      {/* <button id="menu-bar" className="btn__menu" onClick={openModal}>
            <FontAwesomeIcon icon="bars" />
          </button> */}
      <li className="nav__icon">
        <Link to="/cart" className="nav__link">
          <FontAwesomeIcon icon="shopping-cart" />
        </Link>
        {/* {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )} */}
      </li>
    </ul>
    <div className="menu__backdrop">
      {/* <button id="menu-bar" className="btn__menu btn__menu--close" onClick={closeModal}>
            <FontAwesomeIcon icon="times" />
          </button> */}
      <ul className="menu__links">
        <li className="menu__list">
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li className="menu__list">
          <Link to="/books" className="a">
            Books
          </Link>
        </li>
        <li className="menu__list">
          <Link to="/cart" className="a">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  </nav>
</header>;
