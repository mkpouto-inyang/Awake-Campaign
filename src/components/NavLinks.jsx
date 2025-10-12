import { NavLink } from "react-router-dom";
import '../../src/custom-css/navlinks.css'

const NavLinks = () => {
  const links = [
    { path: "/campaign-events", label: "Campaign Events" },
    { path: "join-the-movement", label: "Join the Movement" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className=" hidden lg:flex lg:gap-8 md:text-xs xl:text-sm">
      {links.map((nav, index) => (
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
