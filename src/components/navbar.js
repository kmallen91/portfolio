import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>Sign Out</li>
        <li>
          <NavLink to="/" activeClassName="activeNavButton">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects/" activeClassName="activeNavButton">
            Current Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="activeNavButton">
            Compare
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
