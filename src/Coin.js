import React from "react";

import "./Coin.css";
export const Coin = ({
  image,
  name,
  symbol,
  price,
  totalVolume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto coin" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${totalVolume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}

            <p className="coin-market-cap">
              Mkt Cap: ${marketCap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
