import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import Logo from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
