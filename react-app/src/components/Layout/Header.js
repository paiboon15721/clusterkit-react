import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../stores/auth";
import Logo from "./Logo";

export default props => {
  const history = useHistory();
  const { setToken } = useAuth();

  const handleSignOut = () => {
    localStorage.setItem("token", "");
    setToken("");
    history.push("/login");
  };
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Logo />
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <button className="btn btn-danger" onClick={handleSignOut}>
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  );
};
