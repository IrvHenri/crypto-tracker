import React, { useState, useContext } from "react";
import { Context } from "../CoinContextProvider";
import { useSortableData } from "../hooks/useSortableData";
import Hamburger from "hamburger-react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const openBurger = () => {
    setOpen(!isOpen);
  };

  const { handleChange } = useContext(Context);
  return (
    <nav className="nav-bar">
      <h1>Coin Tracker</h1>
      <form>
        <input
          className="coin-input"
          placeholder="What are you looking for?"
          type="text"
          onChange={handleChange}
        />
        <Hamburger onClick={() => openBurger()} size={20} />
      </form>
    </nav>
  );
};

export default NavBar;
