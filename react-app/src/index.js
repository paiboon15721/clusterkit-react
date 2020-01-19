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
import AntForm from "./pages/AntForm";
import UncontrolForm from "./pages/UncontrolledForm";
import HookForm from "./pages/HookForm";
import Context from "./pages/Context";
import EditCompanyName from "./pages/EditCompanyName";
import "antd/dist/antd.css";
import Login from "./pages/Login";
import { CompanyProvider } from "./stores/company";
import { AuthProvider } from "./stores/auth";
import PrivateRoute from "./components/PrivateRoute";

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
  },
  { path: "/context", name: "Context", component: Context }
];

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CompanyProvider>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Layout>
              <Route exact path="/">
                <Redirect to="/login-app" />
              </Route>
              {menus.map(v => (
                <PrivateRoute exact key={v.path} path={v.path}>
                  <v.component />
                </PrivateRoute>
              ))}
              <Route exact path="*">
                <h1>404 Not Found</h1>
              </Route>
            </Layout>
          </Switch>
        </CompanyProvider>
      </AuthProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
