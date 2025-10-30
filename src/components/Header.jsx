import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import hamburger from "../assets/icons/hamburger.svg";
import heart from "../assets/icons/heart.svg";
import "../../src/custom-css/animations.css";
import { navLinksData } from "../navLinksData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // needed for programmatic navigation

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white w-full shadow-md z-[9999] fixed top-0 left-0">
      <div className="flex justify-between items-center px-5 py-5 max-w-7xl mx-auto">
        <Logo />

        {/* Desktop Nav */}
        <NavLinks />

        {/* Mobile Hamburger */}
        <Button
          iconSrc={hamburger}
          iconOnly
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={toggleMobileMenu}
        />

        {/* Desktop Donate Button */}
        <Button
          size="sm"
          variant="primary"
          className="hidden lg:flex w-[100px] text-[10px] lg:text-sm py-2"
          onClick={() => navigate("/join-the-movement")}
        >
          <img
            src={heart}
            alt="heart icon"
            className="w-4 h-4 mr-2 horizontal-spin"
          />
          Donate
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={closeMobileMenu}
          />

          {/* Slide-in Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[9999] lg:hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-5">
              <Logo />
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Nav Links (scrollable middle) */}
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col px-5 space-y-3">
                {navLinksData.map((nav, index) => (
                  <NavLink
                    key={index}
                    to={nav.path}
                    className={({ isActive }) =>
                      `text-[14px] py-2 hover:text-teal-primary transition-colors animate-slide-up ${
                        isActive ? "font-semibold text-teal-primary" : ""
                      }`
                    }
                    onClick={closeMobileMenu}
                  >
                    {nav.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Donate Button (always visible) */}
            <div className="p-5">
              <Button
                size="md"
                variant="primary"
                className="w-full flex items-center justify-center"
                onClick={() => {
                  closeMobileMenu();
                  navigate("/join-the-movement");
                }}
              >
                <img
                  src={heart}
                  alt="heart icon"
                  className="w-4 h-4 mr-2 horizontal-spin"
                />
                Donate
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
