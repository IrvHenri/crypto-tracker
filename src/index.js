import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CoinContextProvider } from "./CoinContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
