import React, { useContext } from "react";
import { Context } from "../CoinContextProvider";
import { useSortableData } from "../hooks/useSortableData";

//fix table rendering.

const Portfolio = () => {
  const { coins } = useContext(Context);
  const portfolioCoins = [coins[0], coins[3]];
  const { items, requestSort } = useSortableData(portfolioCoins);
  console.log(items);
  return (
    <div>
      <header>
        <div>
          <h1>Your Portfolio</h1>
          <p>
            Accurately tracking the investment performance of your crypto
            assets.
          </p>
        </div>
        <button>Add Transaction</button>
      </header>
      <main>
        <h1>Your Assets</h1>
        <table className="coin-table">
          <caption>Today's Cryptocurrency Prices</caption>
          <thead>
            <tr>
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
                <button type="button">Holdings</button>
              </th>
              <th className="table-header">
                <button type="button">Profit/Loss</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key={items[0].id} className="coin-row">
              <td className="table-row-first">
                <div>
                  <img
                    src={items[0].image}
                    alt=" coin logo"
                    className="coin-image"
                  />
                  {items[0].name} <span>{items[0].symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>${items[0].current_price}</td>
              <td>
                {items[0].price_change_percentage_24h < 0 ? (
                  <p className="coin-percent red">
                    {items[0].price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coin-percent green">
                    {items[0].price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
              </td>
              <td>$350</td>
              <td>+ $350</td>
            </tr>
            {/* <tr key={items[3].id} className="coin-row">
              <td className="table-row-first">
                <div>
                  <img
                    src={items[3].image}
                    alt=" coin logo"
                    className="coin-image"
                  />
                  {items[3].name} <span>{items[3].symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>${items[3].current_price}</td>
              <td>
                {items[3].price_change_percentage_24h < 3 ? (
                  <p className="coin-percent red">
                    {items[3].price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : (
                  <p className="coin-percent green">
                    {items[3].price_change_percentage_24h.toFixed(2)}%
                  </p>
                )}
              </td>
              <td>$350</td>
              <td>+ $350</td>
            </tr> */}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Portfolio;
