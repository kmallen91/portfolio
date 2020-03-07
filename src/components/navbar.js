import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink to="/" className='nav-item'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects/" className='nav-item'>
            Current Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className='nav-item'>
            Compare
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
