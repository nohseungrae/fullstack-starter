import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/show/:id" component={Detail} />
      <Route path="/movie/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
