import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cat from "./components/Cat";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Switch>
    <Route exact path="/category/:cat" component={Cat} />
      <Route>
        <App />
      </Route>
    </Switch>
  </Router>
);
