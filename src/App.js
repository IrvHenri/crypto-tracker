import React, { useState, useEffect } from "react";
import axios from "axios";
import Hamburger from "hamburger-react";
import { useSortableData } from "./hooks/useSortableData";
import "./App.css";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const openBurger = () => {
    setOpen(!isOpen);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const { items, requestSort } = useSortableData(filteredCoins);

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
      <table>
        <caption>Cryptocurrencies</caption>
        <thead>
          <tr>
            <th>
              <button onClick={() => requestSort("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => requestSort("current_price")}>
                Price
              </button>
            </th>
            <th>
              <button
                onClick={() => requestSort("price_change_percentage_24h")}
              >
                24%
              </button>
            </th>
            <th>
              <button onClick={() => requestSort("market_cap")}>
                Market Cap
              </button>
            </th>
            <th>
              <button onClick={() => requestSort("total_volume")}>
                Total Volume
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((coin) => (
            <tr key={coin.id}>
              <td>
                <img src={coin.image} alt=" coin logo" />
                {coin.name} {coin.symbol}
              </td>
              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.total_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
