import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css"

import Home from "./view/Home";
import Weekly from "./view/Weekly";
import WeeklyBattle from "./view/WeeklyBattle";
import Popular from "./view/Popular";
import PopularBattle from "./view/PopularBattle";
import Favorites from "./view/Favorites";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/"> Home</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/weekly"> Weekly</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/weekly-battle"> WeeklyBattle</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/popular"> Popular</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/popular-battle"> PopularBattle</Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link" to="/favorites"> Favorites</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weekly" component={Weekly} />
            <Route path="/weekly-battle" component={WeeklyBattle} />
            <Route path="/popular" component={Popular} />
            <Route path="/popular-battle" component={PopularBattle} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
