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
    <section className="px-4 md:py-7 lg:pb-[100px] pb-10 md:pb-14 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-10 lg:mb-14">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark mb-5">
          Find Screening Centers
        </h1>
        <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#4A5565] max-w-3xl mx-auto">
          Locate cervical cancer screening centers near you. Early detection
          saves lives. Schedule your screenings today.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full p-4 sm:p-6 md:p-8 shadow-xl bg-white rounded-[8px] mb-6 sm:mb-10">
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
        <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 text-[13px] md:text-sm font-medium mx-auto">
          <img src={locationArrow} alt="location arrow" />
          Use Current Location
        </button>
      </div>

      {/* Screening Centres Found */}
      <div className="mb-6">
        <h2 className="font-semibold text-[16px] md:text-[18px] mb-4">
          4 Screening Centres Found
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screeningData.map((center, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-md flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-[#101828] text-[14px] md:text-[15px] lg:text-base leading-tight">
                    {center.name}
                  </p>
                  <span className="text-teal-600 text-sm font-medium">
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
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-800 font-medium">
                  <img src={directionIcon} alt="directions" className="w-4 h-4" />
                  Get Directions
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-200 rounded-md text-sm text-gray-800 font-medium">
                  <img src={greyPhoneIcon} alt="call" className="w-4 h-4" />
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
