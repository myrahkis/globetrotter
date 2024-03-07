import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/prices"}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
