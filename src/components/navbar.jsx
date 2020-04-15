import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/' className='logo'> __KMA__ </Link>
      <ul className='navbar-list' >
        <li>
          <NavLink to="/about" className='nav-item'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className='nav-item'>
            Projects
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact" className='nav-item'>
            Contact
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}
