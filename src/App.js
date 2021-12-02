import React from "react";
import "./styles.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import Home from "./Home";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}
