import React, { useContext } from "react";
import { Context } from "../CoinContextProvider";
import { useSortableData } from "../hooks/useSortableData";
const CoinTable = () => {
  const { filteredCoins, starIcon } = useContext(Context);
  const { items, requestSort } = useSortableData(filteredCoins);

  return (
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
            <button type="button" onClick={() => requestSort("current_price")}>
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
                <img src={item.image} alt=" coin logo" className="coin-image" />
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
            <td>${item.market_cap.toLocaleString()}</td>
            <td>${item.total_volume.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
