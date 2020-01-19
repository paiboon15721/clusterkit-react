import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Layout from "./Layout";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import menus from "../config/menus";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Redirect to="/login-app" />
      </Route>
      {menus.map(v => (
        <PrivateRoute exact key={v.path} path={v.path}>
          <Layout>
            <v.component />
          </Layout>
        </PrivateRoute>
      ))}
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  </Router>
);
