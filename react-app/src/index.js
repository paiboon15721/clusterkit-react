import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import LoginApp from "./LoginApp";
import CommentApp from "./CommentApp";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login-app" />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login-app">
          <LoginApp name="Login App" />
        </Route>
        <Route path="/comment-app">
          <CommentApp />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
