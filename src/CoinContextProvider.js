import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

const CoinContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
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
          favorites,
          handleChange,
          addToFavorites,
          removeFromFavorites,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { CoinContextProvider, Context };
