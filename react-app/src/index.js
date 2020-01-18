import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LoginApp from "./pages/LoginApp";
import CommentApp from "./pages/CommentApp";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import UserTable from "./pages/UserTable";
import ReactUse from "./pages/ReactUse";
import "antd/dist/antd.css";

export const menus = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/login-app", name: "Login App", component: LoginApp },
  { path: "/comment-app", name: "Comment App", component: CommentApp },
  { path: "/user-table", name: "User Table", component: UserTable },
  { path: "/react-use", name: "React Use", component: ReactUse }
];

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login-app" />
        </Route>
        {menus.map(v => (
          <Route key={v.path} path={v.path}>
            <v.component />
          </Route>
        ))}
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
