import React, { Suspense, lazy } from "react";
import LoginApp from "../pages/LoginApp";
import CommentApp from "../pages/CommentApp";
// import Dashboard from "../pages/Dashboard";
import UserTable from "../pages/UserTable";
import ReactUse from "../pages/ReactUse";
import AntForm from "../pages/AntForm";
import UncontrolForm from "../pages/UncontrolledForm";
import HookForm from "../pages/HookForm";
import Context from "../pages/Context";
import EditCompanyName from "../pages/EditCompanyName";
import ReduxTest from "../pages/ReduxTest";
import ReduxMore from "../pages/ReduxMore";
import ReduxFetch from "../pages/ReduxFetch";
import MobxTest from "../pages/MobxTest";
const AsyncDashboard = lazy(() => import("../pages/Dashboard"));

const Dashboard = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncDashboard />
  </Suspense>
);

export default [
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
  { path: "/context", name: "Context", component: Context },
  { path: "/redux-test", name: "Redux Test", component: ReduxTest },
  { path: "/redux-more", name: "Redux More", component: ReduxMore },
  { path: "/redux-fetch", name: "Redux Fetch", component: ReduxFetch },
  { path: "/mobx-test", name: "Mobx Test", component: MobxTest }
];
