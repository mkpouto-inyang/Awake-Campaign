import mtnLogo from "../assets/icons/company-logos/Mtn-logo.svg";
import payazaLogo from "../assets/icons/company-logos/Payaza-logo.svg";
import sebecclyLogo from "../assets/icons/company-logos/Sebeccly-logo.svg";
import wemaLogo from "../assets/icons/company-logos/Wema-logo.svg";
import "../custom-css/animations.css";

const InfiniteScroll = () => {
  return (
    <>
      <div className="carousel">
        <div className="group">
          <div className="logo-card">
            <img
              src={mtnLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={payazaLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={sebecclyLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={wemaLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={mtnLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={sebecclyLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
        </div>

        <div className="group" aria-hidden>
          <div className="logo-card">
            <img
              src={mtnLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={payazaLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={sebecclyLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={wemaLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={mtnLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
          <div className="logo-card">
            <img
              src={sebecclyLogo}
              alt="Partner Logo"
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
