import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Context } from "../CoinContextProvider";
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const openBurger = () => {
    setOpen(!isOpen);
  };
  const { handleChange } = useContext(Context);
  //create logo

  let activeStyle = {
    color: "#6383fc",
  };
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <h1>Coin Tracker</h1>
        <div className="nav-links">
          <NavLink exact to="/" activeStyle={activeStyle}>
            Cryptocurrencies
          </NavLink>
          <NavLink to="/portfolio" activeStyle={activeStyle}>
            Portfolio
          </NavLink>
          <NavLink to="/watchlist" activeStyle={activeStyle}>
            Watchlist
          </NavLink>
          <NavLink to="/learn" activeStyle={activeStyle}>
            Learn
          </NavLink>
        </div>
      </div>

      <div className="search">
        <button aria-label="submit search" className="search-bar-submit">
          <i className="fas fa-search"></i>
        </button>

        <input
          className="search-input"
          placeholder="What are you looking for?"
          type="text"
          onChange={handleChange}
          aria-label="search"
        />
      </div>
      <div className="hamburger">
        <Hamburger onClick={() => openBurger()} size={20} />
      </div>
    </nav>
  );
};

export default NavBar;
