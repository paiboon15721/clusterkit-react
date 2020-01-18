import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login-app" className="nav-link active">
              Login App
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/comment-app" className="nav-link active">
              Comment App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuList;
