import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

const CoinContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  function addToFavorites(newItem) {
    setFavorites((prevFavorites) => [...prevFavorites, newItem]);
  }

  function removeFromFavorites(id) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  }

  function clearFavorites() {
    setFavorites([]);
  }

  function starIcon(id, item) {
    const addedToFavorites = favorites.find((favorite) => favorite.id === id);
    if (addedToFavorites) {
      return (
        <i className="fas fa-star" onClick={() => removeFromFavorites(id)}></i>
      );
    } else {
      return (
        <i className="far fa-star" onClick={() => addToFavorites(item)}></i>
      );
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=fal"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Context.Provider
        value={{
          filteredCoins,
          handleChange,
          starIcon,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { CoinContextProvider, Context };
