import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginApp from "./LoginApp";
import CommentApp from "./CommentApp";

const App = () => (
  <div className="container">
    <Router>
      <Route path="/login-app">
        <LoginApp name="Login App" />
      </Route>
      <Route path="/comment-app">
        <CommentApp />
      </Route>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
