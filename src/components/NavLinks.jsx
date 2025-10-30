import { NavLink } from "react-router-dom";
import '../../src/custom-css/navlinks.css'
import { navLinksData } from "../navLinksData";

const NavLinks = () => {

  return (
    <nav className=" hidden lg:flex lg:gap-8 md:text-xs xl:text-sm">
      {navLinksData.map((nav, index) => (
        <NavLink
          key={index}
          to={nav.path}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          {nav.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
