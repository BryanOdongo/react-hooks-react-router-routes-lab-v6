import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" as="a">
        Home
      </NavLink>
      <NavLink to="/actors" as="a">
        Actors
      </NavLink>
      <NavLink to="/directors" as="a">
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
