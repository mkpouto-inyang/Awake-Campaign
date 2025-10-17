import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import hamburger from "../assets/icons/hamburger.svg";
import heart from "../assets/icons/heart.svg";
import "../../src/custom-css/animations.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock scroll on mobile menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  return (
    <header
      className="bg-white w-full z-[9999]"
      style={{ position: "fixed", top: 0, left: 0 }}
    >
      <div className="flex justify-between items-center px-5 py-5 max-w-7xl mx-auto">
        <Logo />

        <NavLinks />

        <Button
          iconSrc={hamburger}
          iconOnly
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={toggleMobileMenu}
        />

        {/* Desktop: Donate button */}
        <Button
          size="sm"
          variant="primary"
          className="hidden lg:flex w-[100px] text-[10px] lg:text-sm py-2"
          onClick={() => window.location.href = "/join-the-movement"}
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
            className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm z-[9998] lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[9999] lg:hidden transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
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

              {/* Navigation Links */}
              <nav className="flex flex-col pb-5 px-5 space-y-3 flex-1">
                <a
                  href="/campaign-events"
                  className="text-[14px] font-medium py-2 hover:text-teal-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Campaign Events
                </a>
                <a
                  href="/join-the-movement"
                  className="text-[14px]  font-medium py-2 hover:text-teal-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Join the Movement
                </a>
                <a
                  href="/about-us"
                  className="text-[14px]  font-medium py-2 hover:text-teal-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="text-[14px]  font-medium py-2 hover:text-teal-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Donate Button */}
              <div className="p-5 ">
                <Button
                  size="md"
                  variant="primary"
                  className="w-full flex items-center justify-center"
                  onClick={() => {
                    window.location.href = "/join-the-movement";
                    closeMobileMenu();
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
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
