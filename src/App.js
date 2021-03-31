import React, { useState, useContext } from "react";
import { useSortableData } from "./hooks/useSortableData";
import { Context } from "./CoinContextProvider";
import Hamburger from "hamburger-react";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  const openBurger = () => {
    setOpen(!isOpen);
  };
  const {
    filteredCoins,
    handleChange,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useContext(Context);
  const { items, requestSort } = useSortableData(filteredCoins);

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
  console.log(favorites);
  return (
    <div className="coin-app">
      <main className="coin-search">
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
      </main>
      <table className="coin-table">
        <caption>Today's Cryptocurrency Prices</caption>
        <thead>
          <tr>
            <th></th>
            <th className="table-header table-row-first">
              <button type="button" onClick={() => requestSort("name")}>
                Name
              </button>
            </th>
            <th className="table-header">
              <button
                type="button"
                onClick={() => requestSort("current_price")}
              >
                Price
              </button>
            </th>
            <th className="table-header">
              <button
                type="button"
                onClick={() => requestSort("price_change_percentage_24h")}
              >
                24%
              </button>
            </th>
            <th className="table-header">
              <button type="button" onClick={() => requestSort("market_cap")}>
                Market Cap
              </button>
            </th>
            <th className="table-header">
              <button type="button" onClick={() => requestSort("total_volume")}>
                Total Volume
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="coin-row">
              <td className="watchlist-star">
                <button>{starIcon(item.id, item)}</button>
              </td>
              <td className="table-row-first">
                <div>
                  <img
                    src={item.image}
                    alt=" coin logo"
                    className="coin-image"
                  />
                  {item.name} {item.symbol}
                </div>
              </td>
              <td>${item.current_price}</td>
              <td>
                {item.price_change_percentage_24h < 0 ? (
                  <p className="coin-percent red">
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coin-percent green">
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
              </td>
              <td>${item.market_cap}</td>
              <td>${item.total_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
