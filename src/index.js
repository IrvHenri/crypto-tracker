import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CoinContextProvider } from "./CoinContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
