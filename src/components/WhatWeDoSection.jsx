import eventImage from "../assets/static-images/event-img-1.png";
import Users from "../assets/icons/grayUsers.svg";
import Calendar from "../assets/icons/calendar.svg";
import Location from '../assets/icons/location.svg'
import Button from "./Button";

const WhatWeDoSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-bold text-[20px] md:text-[38px] mdlg:text-[40px] lg:text-[50px] text-blue-dark text-center mb-5 lg:mb-10 mt-[40px] lg:mt-[70px]">
          What We're Doing
        </h1>
      </div>

      <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-4xl text-[#4A5565] leading-relaxed text-center px-2 xl:px-0 mx-auto mb-12 md:mb-20">
        The AWAKE campaign is a comprehensive approach to cervical cancer
        prevention, combining awareness, education, and direct action to save
        lives
      </p>

      <div className="flex gap-[48px] w-full justify-center mb-[80px]">
        <div className="w-[400px] bg-teal-light rounded-[10px]">
          <img src={eventImage} alt="" className="" />
          <div className="p-[20px]">
            <p>Community Screening</p>

            <div className="flex gap-[16px]">
                <img src={Calendar} alt="" />
                <p>March 15, 2025</p>
            </div>
            <div className="flex gap-[16px]">
                <img src={Location} alt="" />
                <p>Downtown Health Center</p>
            </div>
            <div className="flex gap-[16px]">
                <img src={Users} alt="" />
                <p>To be determined</p>
            </div>
          </div>

        <div className="p-5">
          <button className=" border border-[D9D9D9] bg-white text-[#101828] mb-[70px] w-[98%]">
            Learn More
          </button>
        </div>

        </div>





        <div className="w-[400px] px-[20px] bg-teal-light rounded-[10px]">
          Box1
        </div>
        <div className="w-[400px] px-[20px] bg-teal-light rounded-[10px]">
          Box1
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
