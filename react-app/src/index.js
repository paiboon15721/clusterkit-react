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

const App = () => (
  <div className="container">
    <Router>
      <ul>
        <li>
          <Link to="/login-app">Login App</Link>
        </li>
        <li>
          <Link to="/comment-app">Comment App</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login-app" />
        </Route>
        <Route path="/login-app">
          <LoginApp name="Login App" />
        </Route>
        <Route path="/comment-app">
          <CommentApp />
        </Route>
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(<Layout />, document.getElementById("root"));
