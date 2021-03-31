import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import CoinTable from "./components/CoinTable";
import "./App.css";

function App() {
  return (
    <div className="coin-app">
      <NavBar />
      <CoinTable />
    </div>
  );
}

export default App;
