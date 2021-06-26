import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
	}