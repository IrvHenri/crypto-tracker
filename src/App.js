import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=fal"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      });
  });

  return (
    <div className="App">
      <h1>apiii</h1>
    </div>
  );
}

export default App;
