import womenImage from "../assets/static-images/women-image.png";
import cancerRibbon from "../assets/icons/cancer-ribbon.svg";
import Button from "./Button";
import { useState } from "react";

const HeroSection = () => {
   const [currentAmount, setCurrentAmount] = useState(800000);

    // Campaign progress data
  const goalAmount = 5000000; // 5.0M goal
  const progressPercentage = (currentAmount / goalAmount) * 100;

    const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  return (
    <section
      className="w-full flex flex-col items-center pb-[80px] md:pb-[150px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(228, 248, 243, 0.6) 80%, rgba(255, 255, 255, 0.6) 100%)",
      }}
    >
      <div className="relative text-center flex items-center w-fit mt-[20px] lg:mt-[0px]">
        <div
          className="absolute top-0 left-[-20px] md:top-0 md:left-16 lg:top-24 lg:left-[-50px] w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72  bg-teal-primary opacity-35 rounded-full z-0 blur-[100px]"
        ></div>

        <h1
          className="absolute top-1.5 left-1 text-[70px] smd:text-[100px] md:text-[120px] mdlg:text-[140px] lg:text-[180px] lgxl:text-[220px] xl:text-[280px] font-bold text-black/40 blur-[5px] select-none"
          aria-hidden="true"
        >
          AWAKE
        </h1>

        <h1
          className="relative text-[70px] md:text-[120px] smd:text-[100px] mdlg:text-[140px] lg:text-[180px] lgxl:text-[220px] xl:text-[280px] font-bold text-transparent bg-clip-text bg-cover bg-center inline-block"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${womenImage})`,
            backgroundPosition: "50% 90%",
            backgroundSize: "cover",
          }}
        >
          AWAKE
        </h1>
      </div>

      <div>
        <img
          src={cancerRibbon}
          alt="cancer Ribbon"
          className="w-4 h-4 md:w-7 md:h-7 mdlg:mt-[-40px]"
        />
      </div>

      <div>
        <p className="text-[11px] md:text-[18px] lg:text-[22px] mt-3 font-semibold text-teal-darkest">
          Eyes Open. Take Action. Help Others Do the Same
        </p>
      </div>

      <div className="px-5">
        <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-7xl mx-auto text-gray-700 leading-relaxed text-center mt-6 lg:mt-4">
          Through film, <i>Awake</i> shines a light on cervical cancer in
          Nigeria. We raise awareness, spark conversations, and help women take
          action for their health.
        </p>
      </div>

      <div className="mt-12 px-4 mb-12 ">
        <Button
          variant="primary"
          className="
                text-xs smd:text-sm md:text-base
                px-6 md:px-8 lg:px-10
                py-2 lg:py-3 rounded-[6px] "
        >
          Join the Movement
        </Button>
      </div>

      <div
        className="w-[90%] max-w-6xl h-[300px] sm:h-[250px] md:h-[400px] lg:h-[550px] xl:h-[700px] bg-black rounded-2xl lg:rounded-3xl mx-auto shadow-2xl"
      ></div>

       <div className="px-5 mb-8 lg:mb-20 mt-1">
        <p className="text-[12px] smd:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-w-7xl mx-auto text-teal-dark leading-relaxed text-center mt-6 lg:mt-4">
          #AWAKE #IamAwake  #IamAwakeToCervicalCancer
        </p>
      </div>
<div className="w-[90%] max-w-6xl mx-auto">

  {/* Desktop view: one full-width card with 3 horizontal stats */}
  <div className="hidden md:flex p-6 sm:p-8 md:p-10 shadow-2xl bg-white justify-around items-center gap-6 rounded-[12px] mb-[60px]">
    <div className="text-center">
      <p className="text-orange text-2xl lg:text-3xl font-semibold">14,000+</p>
      <p className="text-sm lg:text-base text-blue-dark">People Educated</p>
    </div>
    <div className="text-center">
      <p className="text-orange text-2xl lg:text-3xl font-semibold">7,000+</p>
      <p className="text-sm lg:text-base text-blue-dark">HPV Vaccines Administered</p>
    </div>
    <div className="text-center">
      <p className="text-orange text-2xl lg:text-3xl font-semibold">50+</p>
      <p className="text-sm lg:text-base text-blue-dark">Outreach Events Held</p>
    </div>
  </div>

  {/* Mobile view: 3 individual stat cards */}
  <div className="flex flex-col gap-6 md:hidden mt-4 mb-10">
    <div className="p-5 shadow-md bg-white rounded-[8px] text-center">
      <p className="text-orange text-[20px] font-semibold mb-1">14,000+</p>
      <p className="text-[12px] text-blue-dark">People Educated</p>
    </div>
    <div className="p-5 shadow-md bg-white rounded-[8px] text-center">
      <p className="text-orange text-[20px] font-semibold">7,000+</p>
      <p className="text-[12px] text-blue-dark">HPV Vaccines Administered</p>
    </div>
    <div className="p-5 shadow-md bg-white rounded-[8px] text-center">
      <p className="text-orange text-[20px] font-semibold">50+</p>
      <p className="text-[12px] text-blue-dark">Outreach Events Held</p>
    </div>
  </div>
</div>

<div className="w-[90%] max-w-6xl mx-auto ">
  {/* Progress Summary */}
  <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
    <span className="font-semibold text-gray-800">
      {formatCurrency(currentAmount)} raised
    </span>
    <span className="font-semibold text-gray-700">₦5.0M goal</span>
  </div>

  {/* Progress Bar */}
  <div className="relative bg-white rounded-full shadow-inner h-2 sm:h-3 md:h-4 w-full overflow-hidden">
    <div
      className="bg-teal-primary h-full rounded-full transition-all duration-700 ease-in-out"
      style={{ width: `${progressPercentage}%` }}
    ></div>

    {/* Floating Label */}
    <span
      className="absolute top-full mt-2 text-[11px] sm:text-xs font-semibold text-gray-800 transition-all duration-500"
      style={{
        left: `${progressPercentage}%`,
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
      }}
    >
      {formatCurrency(currentAmount)}
    </span>
  </div>
</div>

    </section>
  );
};

export default HeroSection;
