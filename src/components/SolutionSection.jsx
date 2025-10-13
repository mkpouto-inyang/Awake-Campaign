import userGroup from "../assets/icons/userGroup.svg";
import shield from "../assets/icons/shield.svg";
import speechBubble from "../assets/icons/speechBubble.svg";

const SolutionSection = () => {
  return (
    <div
      className="px-4 md:px-6 text-white py-[60px] md:py-[80px] lg:py-[100px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(228, 248, 243, 0.6) 80%, rgba(255, 255, 255, 0.6) 100%)",
      }}
    >
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="font-bold text-[20px] md:text-[38px] mdlg:text-[40px] lg:text-[50px] text-blue-dark text-center mb-4 lg:mb-10">
          Our Solution & Campaign Goals
        </h1>
      </div>

      {/* Cards Container */}
      <div className="hidden md:flex mt-14 flex-wrap justify-center gap-x-[20px] lg:gap-x-[44px] gap-y-10 max-w-6xl mx-auto">
        {/* Awareness */}
        <div className="relative p-6 md:p-10 lg:p-12 shadow-xl bg-white rounded-[12px] text-center flex-[1_0_300px] max-w-[360px] lg:max-w-[540px] lg:min-h-[220px]">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center">
            <img src={userGroup} alt="icon" className="w-6 md:w-7" />
          </div>
          <h3 className="text-blue-dark font-semibold text-lg md:text-2xl mt-8 mb-2">
            Awareness
          </h3>
          <p className="text-[14px] lg:text-base text-blue-dark">
            Educate at least 1 million Nigerians through documentary screenings
            & media
          </p>
        </div>

        {/* Prevention */}
        <div className="relative p-6 md:p-10 shadow-xl bg-white rounded-[12px] text-center flex-[1_0_300px] max-w-[360px] lg:max-w-[540px] lg:min-h-[220px]">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
            <img src={shield} alt="icon" className="w-6 md:w-7" />
          </div>
          <h3 className="text-blue-dark font-semibold text-lg md:text-2xl mt-8 mb-2">
            Prevention
          </h3>
          <p className="text-[14px] lg:text-base text-blue-dark">
            Screen 1000 women and vaccinate 500 women in Lagos for cervical
            cancer
          </p>
        </div>

        {/* Break line */}
        <div className="basis-full h-0" />

        {/* Advocacy */}
        <div className="relative p-6 md:p-10 shadow-xl bg-white rounded-[12px] text-center flex-[1_0_300px] max-w-[360px] lg:max-w-[540px] lg:min-h-[220px]">
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 bg-teal-100 rounded-full flex items-center justify-center">
            <img src={speechBubble} alt="icon" className="w-6 md:w-7" />
          </div>
          <h3 className="text-blue-dark font-semibold text-lg md:text-2xl mt-8 mb-2">
            Advocacy
          </h3>
          <p className="text-[14px] lg:text-base text-blue-dark">
            Inspire nationwide dialogue that sparks collective advocacy
          </p>
        </div>
      </div>

      {/* MOBILE Layout */}
      <div className="md:hidden px-4 flex flex-col gap-10 items-center mt-10">
        {/* Awareness Card */}
        <div className="relative bg-white rounded-xl shadow-md px-5 py-6 w-full max-w-sm self-start">
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <img src={userGroup} alt="Awareness" className="w-5" />
          </div>
          <h3 className="text-blue-dark font-semibold text-base mb-1">
            Awareness
          </h3>
          <p className="text-[13px] text-blue-dark">
            Educate at least 1 million Nigerians through documentary screenings
            & media
          </p>
        </div>

        {/* Prevention Card */}
        <div className="relative bg-white rounded-xl shadow-md px-5 py-6 w-full max-w-sm self-end">
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <img src={shield} alt="Prevention" className="w-5" />
          </div>
          <h3 className="text-blue-dark font-semibold text-base mb-1">
            Prevention
          </h3>
          <p className="text-[13px] text-blue-dark">
            Screen 1000 women and vaccinate 500 women in Lagos for cervical
            cancer
          </p>
        </div>

        {/* Advocacy Card */}
        <div className="relative bg-white rounded-xl shadow-md px-5 py-6 w-full max-w-sm self-start">
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <img src={speechBubble} alt="Advocacy" className="w-5" />
          </div>
          <h3 className="text-blue-dark font-semibold text-base mb-1">
            Advocacy
          </h3>
          <p className="text-[13px] text-blue-dark">
            Inspire nationwide dialogue that sparks collective advocacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
