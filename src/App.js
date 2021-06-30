import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import CoinTable from "./components/CoinTable";
import "./App.css";

function App() {
  return (
    <div className="coin-app">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <CoinTable />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/watchlist"></Route>
        <Route path="/learn"></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
