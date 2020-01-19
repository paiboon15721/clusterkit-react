import LoginApp from "../pages/LoginApp";
import CommentApp from "../pages/CommentApp";
import Dashboard from "../pages/Dashboard";
import UserTable from "../pages/UserTable";
import ReactUse from "../pages/ReactUse";
import AntForm from "../pages/AntForm";
import UncontrolForm from "../pages/UncontrolledForm";
import HookForm from "../pages/HookForm";
import Context from "../pages/Context";
import EditCompanyName from "../pages/EditCompanyName";
import ReduxTest from "../pages/ReduxTest";

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
  { path: "/redux-test", name: "Redux Test", component: ReduxTest }
];
