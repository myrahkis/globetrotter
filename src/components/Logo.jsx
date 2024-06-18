import { NavLink } from "react-router-dom";

function Logo() {
  const container = {
    display: "flex",
  };
  const link = {
    textDecoration: "none",
    color: "rgb(194, 194, 194)",
  };

  return (
    <div style={container}>
      <NavLink to="/" style={link}>
        <img src="mountain.svg" alt="logo" className="logo" />
        Globetrotter
      </NavLink>
    </div>
  );
}

export default Logo;
