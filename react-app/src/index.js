import React, { useState } from "react";
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
import AntForm from "./pages/AntForm";
import UncontrolForm from "./pages/UncontrolledForm";
import HookForm from "./pages/HookForm";
import EditCompanyName from "./pages/EditCompanyName";
import "antd/dist/antd.css";

export const menus = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/login-app", name: "Login App", component: LoginApp },
  { path: "/comment-app", name: "Comment App", component: CommentApp },
  { path: "/user-table", name: "User Table", component: UserTable },
  { path: "/react-use", name: "React Use", component: ReactUse },
  { path: "/uncontrol-form", name: "Uncontrol Form", component: UncontrolForm },
  { path: "/ant-form", name: "Ant Form", component: AntForm },
  { path: "/hook-form", name: "Hook Form", component: HookForm },
  {
    path: "/edit-company-name",
    name: "Edit Company Name",
    component: EditCompanyName
  }
];

const App = () => {
  const [companyName, setCompanyName] = useState("CusterKit123");

  return (
    <Router>
      <Layout companyName={companyName}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login-app" />
          </Route>
          {menus.map(v => (
            <Route key={v.path} path={v.path}>
              {v.path === "/edit-company-name" ? (
                <v.component
                  companyName={companyName}
                  setCompanyName={setCompanyName}
                />
              ) : (
                <v.component />
              )}
            </Route>
          ))}
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
