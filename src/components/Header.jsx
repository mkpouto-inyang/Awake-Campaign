import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import hamburger from "../assets/icons/hamburger.svg";
import heart from "../assets/icons/heart.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full z-[9999]" style={{ position: 'fixed', top: 0, left: 0 }}>
      <div className="flex justify-between items-center px-5 py-3 max-w-7xl mx-auto">
        <Logo />

        <NavLinks />

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
          className="hidden lg:flex w-[100px] text-[10px] lg:text-sm py-2"
          onClick={() => console.log("donate")}
        >
          Donate
        </Button>
      </div>
    </header>
  );
};

export default Header;
