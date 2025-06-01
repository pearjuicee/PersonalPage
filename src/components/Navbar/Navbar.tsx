import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const navItems = [
    { label: "About", path: "/about" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar-container">
      <NavLink to="/" className="site-name">
        Shirley<br />Ding
      </NavLink>
      <nav className="vertical-nav">
        {navItems.map((item) => (
          <NavLink
            end
            key={item.path}
            to={item.path}
            className="nav-link"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
