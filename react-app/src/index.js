import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
import "antd/dist/antd.css";
import Login from "./pages/Login";
import { CompanyProvider } from "./stores/company";
import { AuthProvider } from "./stores/auth";
import PrivateRoute from "./components/PrivateRoute";
import menus from "./config/menus";

const token = localStorage.getItem("token");

const App = () => {
  return (
    <Router>
      <AuthProvider token={token}>
        <CompanyProvider>
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
        </CompanyProvider>
      </AuthProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
