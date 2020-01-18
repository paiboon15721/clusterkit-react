import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LoginApp from "./LoginApp";
import CommentApp from "./CommentApp";

const App = () => (
  <div className="container">
    <Router>
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

ReactDOM.render(<App />, document.getElementById("root"));
