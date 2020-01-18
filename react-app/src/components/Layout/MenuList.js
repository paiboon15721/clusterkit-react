import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const { pathname } = useLocation();

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={`nav-link${
                pathname === "/dashboard" ? " active" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login-app"
              className={`nav-link${
                pathname === "/login-app" ? " active" : ""
              }`}
            >
              Login App
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/comment-app"
              className={`nav-link${
                pathname === "/comment-app" ? " active" : ""
              }`}
            >
              Comment App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuList;
