import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import hamburger from '../assets/icons/hamburger.svg';
import heart from '../assets/icons/heart.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-5 py-5 max-w-7xl mx-auto">

        <Logo />

        <NavLinks />

        {/* Buttons */}
    
          <Button
            iconSrc={hamburger}
            iconOnly
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => console.log("toggle menu")}
          />

          {/* Desktop: Donate button */}
          <Button
            iconSrc={heart}
            size="sm"
            variant="primary"
            className="hidden lg:flex w-[120px] text-[12px] lg:text-sm py-2"
            onClick={() => console.log("donate")}
          >
            Donate
          </Button>

      </div>
    </header>
  );
};

export default Header;
