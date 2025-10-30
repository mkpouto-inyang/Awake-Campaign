import locationArrow from "../assets/icons/locationArrow.svg";
import searchIcon from "../assets/icons/search.svg";
import phoneIcon from "../assets/icons/phone.svg";
import locationPin from "../assets/icons/location.svg";
import greyClockIcon from '../assets/icons/greyClockIcon.svg';
import directionIcon from '../assets/icons/blackLocationArrow.svg';
import greyPhoneIcon from '../assets/icons/greyPhoneIcon.svg'

const screeningData = [
  {
    name: "Lagos University Teaching Hospital (LUTH)",
    distance: "2.3 km",
    address: "Idi Araba, Surulere, Lagos",
    phone: "+234 80 234 98714",
    hours: "Mon–Fri: 8AM–4PM",
  },
  {
    name: "Lagos University Teaching Hospital (LUTH)",
    distance: "2.3 km",
    address: "Idi Araba, Surulere, Lagos",
    phone: "+234 80 234 98714",
    hours: "Mon–Fri: 8AM–4PM",
  },
  {
    name: "Lagos University Teaching Hospital (LUTH)",
    distance: "2.3 km",
    address: "Idi Araba, Surulere, Lagos",
    phone: "+234 80 234 98714",
    hours: "Mon–Fri: 8AM–4PM",
  },
  {
    name: "Lagos University Teaching Hospital (LUTH)",
    distance: "2.3 km",
    address: "Idi Araba, Surulere, Lagos",
    phone: "+234 80 234 98714",
    hours: "Mon–Fri: 8AM–4PM",
  },
];

const ScreeningCentres = () => {
  return (
    <section className="px-5 md:py-7 lg:pb-[100px] pb-10 md:pb-14 max-w-6xl mx-auto ">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-10 lg:mb-14">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark mb-5 autoShow">
          Find Screening Centers
        </h1>
        <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#4A5565] max-w-3xl mx-auto autoShow">
          Locate cervical cancer screening centers near you. Early detection
          saves lives. Schedule your screenings today.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full p-4 sm:p-6 md:p-8 shadow-xl bg-white rounded-[8px] mb-6 sm:mb-10 autoShow">
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <input
            type="text"
            placeholder="Enter your address, city or use current location"
            className="w-full md:flex-1 px-3 py-2 md:px-4 md:py-[10px] rounded-md border border-gray-200 bg-input-grey text-[13px] md:text-sm placeholder:text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <select className="w-full md:w-[180px] px-3 py-2 md:px-4 md:py-[10px] rounded-md border border-gray-200 bg-input-grey text-[13px] md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
            <option>All States</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Oyo</option>
            <option>Kano</option>
          </select>

          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-[10px] text-white bg-black hover:bg-gray-800 rounded-md text-[13px] md:text-sm">
            <img src={searchIcon} alt="search icon" className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>

      {/* Use Current Location */}
      <div className="text-center mb-10">
        <button className="flex items-center gap-2  text-teal-primary text-[12px] md:text-[14px] font-medium mx-auto ">
          <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2657 1.98829L1.98469 8.31429L6.81369 10.3203C8.22502 10.9061 9.34636 12.0278 9.93169 13.4393L11.9377 18.2673L18.2657 1.98829ZM20.1127 2.67029L13.7847 18.9513C13.3847 19.9813 12.2337 20.5083 11.2137 20.1313C10.9651 20.0397 10.7381 19.8976 10.5471 19.7139C10.356 19.5303 10.2051 19.3091 10.1037 19.0643L8.09669 14.2343C7.70579 13.2939 6.95825 12.5467 6.01769 12.1563L1.18969 10.1503C0.18569 9.73329 -0.27231 8.57429 0.16669 7.56029C0.27454 7.31243 0.430343 7.08835 0.625133 6.90094C0.819923 6.71353 1.04985 6.56649 1.30169 6.46829L17.5827 0.14029C17.9364 -0.00185326 18.324 -0.0369348 18.6975 0.0394048C19.071 0.115745 19.4138 0.30014 19.6833 0.569678C19.9528 0.839216 20.1372 1.18201 20.2136 1.55548C20.2899 1.92894 20.2548 2.3166 20.1127 2.67029Z" fill="#00999e"/>
          </svg>

          Use Current Location
        </button>
      </div>

      {/* Screening Centres Found */}
      <div className="mb-6">
        <h2 className="font-semibold text-sm md:text-[18px] mb-4">
          4 Screening Centres Found
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screeningData.map((center, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-md flex flex-col justify-between animate-slide-up"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <p className="font-semibold text-[#101828] text-[14px] md:text-[15px] lg:text-base leading-tight">
                    {center.name}
                  </p>
                  <span className="text-teal-600 text-[12px] lg:text-sm font-medium ml-1">
                    {center.distance}
                  </span>
                </div>

                <div className="text-[13px] text-[#4A5565] flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <img src={locationPin} alt="location" className="w-4 h-4 mt-[2px]" />
                    <p>{center.address}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={greyPhoneIcon} alt="phone" className="w-4 h-4 mt-[2px]" />
                    <p>{center.phone}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={greyClockIcon} alt="clock" className="w-4 h-4 mt-[2px]" />
                    <p>{center.hours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-200 rounded-md text-[12px] lg:text-sm text-gray-800 font-medium">
                  <img src={directionIcon} alt="directions" className="w-[10px] h-[10px] lg:w-4 lg:h-4" />
                  Get Directions
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-200 rounded-md text-[12px] lg:text-sm text-gray-800 font-medium">
                  <img src={greyPhoneIcon} alt="call" className="w-[10px] h-[10px] lg:w-4 lg:h-4" />
                  Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreeningCentres;
