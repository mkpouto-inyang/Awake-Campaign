import { NavLink } from "react-router-dom";
import Button from "./Button";
import heart from "../assets/icons/heartfooter.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import tiktok from "../assets/icons/tiktok.svg";
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8">
          {/* AWAKE Campaign Section */}
          <div className="md:col-span-2 lg:col-span-1 lg:pr-8 ">
            <div className="flex items-center gap-2 mb-6 autoShow">
              <img src={heart} alt="heart" className="w-6 h-6 text-orange autoShow" />
              <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold autoShow">
                AWAKE Campaign
              </h3>
            </div>
            <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-text-grey-light mb-8 leading-relaxed autoShow">
              We are on a mission to use the power of film to creatively save
              lives — raising awareness, driving education, and inspiring
              community action to protect women in Nigeria from cervical cancer.
            </p>
            <Button
              variant="primary"
              className="autoShow bg-teal-primary hover:bg-teal-dark text-white px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 rounded-lg font-medium text-[12px] md:text-[14px] lg:text-[16px]"
              onClick={() => (window.location.href = "/join-the-movement")}
            >
              Donate Now
            </Button>
          </div>

          {/* Quick Links Section */}
          <div className="md:pl-4 lg:pl-8 ">
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold mb-6 autoShow">
              Quick Links
            </h3>
            <nav className="space-y-4">
              <NavLink
                to="/"
                className="block text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light hover:text-white transition-colors autoShow"
              >
                Home
              </NavLink>
              <NavLink
                // to="/campaign-events"
                className="block text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light hover:text-white transition-colors autoShow"
              >
                Campaign Events
              </NavLink>
              <NavLink
                to="/join-the-movement"
                className="block text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light hover:text-white transition-colors autoShow"
              >
                Join the Movement
              </NavLink>
              <NavLink
                to="/about-us"
                className="block text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light hover:text-white transition-colors autoShow"
              >
                About Us
              </NavLink>
            </nav>
          </div>

          {/* Contact & Social Section */}
          <div className="md:pl-4 lg:pl-8">
            <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold mb-6 autoShow">
              Contact Us
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <img src={email} alt="email" className="w-5 h-5 autoShow" />
                <a
                  href="mailto:info@awakecampaign.com"
                  className="text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light hover:text-white transition-colors autoShow"
                >
                  info@awakecampaign.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <img src={phone} alt="phone" className="w-5 h-5 autoShow" />
                <div className="text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light autoShow">
                  <div className="autoShow">08022298713,</div>
                  <div className="autoShow">08022298713</div>
                </div>
              </div>
            </div>

            <h4 className="text-[14px] md:text-[16px] lg:text-[18px] font-bold mb-4 autoShow">
              Follow Us
            </h4>
            <div className="flex gap-4 autoShow">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={tiktok} alt="TikTok" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="border-t max-w-7xl mx-auto py-7 border-text-grey-dark autoShow">
        <div className="max-w-7xl mx-auto px-5 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold mb-4">
              Stay Updated
            </h3>
            <p
              className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-text-grey-light mb-8"
              style={{ wordSpacing: "4px", letterSpacing: "2px" }}
            >
              Subscribe to our newsletter for campaign update and screening
              reminders
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email.."
                className="flex-1 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg bg-text-grey-dark text-white placeholder-text-grey-middle border-none focus:outline-none focus:ring-2 focus:ring-teal-primary text-[12px] md:text-[14px] lg:text-[16px]"
              />
              <Button
                variant="primary"
                className="bg-teal-primary hover:bg-teal-dark text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium text-[14px] md:text-[14px] lg:text-[16px] w-full sm:w-auto"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Section */}
      <div className="border-t max-w-7xl py-8 mx-auto border-text-grey-dark autoShow">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[12px] md:text-[14px] lg:text-[16px] text-text-grey-light text-center md:text-left">
              <span className="inline-block mr-2 sm:mr-4 mb-1 sm:mb-0">
                #AWAKE
              </span>
              <span className="inline-block mr-2 sm:mr-4 mb-1 sm:mb-0">
                #IamAwake
              </span>
              <span className="inline-block">#IamAwakeToCervicalCancer</span>
            </div>
            <div className="text-[11px] md:text-[12px] lg:text-[14px] text-text-grey-light text-center md:text-right">
              Copyright © 2025 AWAKE. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
