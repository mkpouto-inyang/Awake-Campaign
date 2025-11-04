import { useState, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";

import locationArrow from "../assets/icons/locationArrow.svg";
import searchIcon from "../assets/icons/search.svg";
import phoneIcon from "../assets/icons/phone.svg";
import locationPin from "../assets/icons/location.svg";
import greyClockIcon from "../assets/icons/greyClockIcon.svg";
import directionIcon from "../assets/icons/blackLocationArrow.svg";
import greyPhoneIcon from "../assets/icons/greyPhoneIcon.svg";

const ScreeningCentres = () => {
  const [location, setLocation] = useState(null);
  const [screeningResults, setScreeningResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const mapRef = useRef(null); // required for PlacesService

  const handleUseCurrentLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(coords);
        getNearbyPlaces(coords);
      },
      (err) => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  const getNearbyPlaces = async ({ lat, lng }) => {
  try {
    const res = await fetch("http://localhost:3001/api/nearby", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ lat, lng })
    });

    const data = await res.json();

    if (!data.places) {
      throw new Error("No results found.");
    }

    const results = data.places.map((place) => ({
      name: place.displayName?.text,
      address: place.formattedAddress,
      location: place.location
    }));

    setScreeningResults(results);
  } catch (err) {
    setError("Failed to load screening centers.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="px-5 md:py-7 lg:pb-[100px] pb-10 md:pb-14 max-w-6xl mx-auto">
      <div className="text-center mb-6 md:mb-10 lg:mb-14">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark mb-5 autoShow">
          Find Screening Centers
        </h1>
        <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#4A5565] max-w-3xl mx-auto autoShow">
          Locate cervical cancer screening centers near you. Early detection
          saves lives. Schedule your screenings today.
        </p>
      </div>

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

      <div className="text-center mb-10">
        <button
          onClick={handleUseCurrentLocation}
          className="flex items-center gap-2 text-teal-primary text-[12px] md:text-[14px] font-medium mx-auto"
        >
          <img src={locationArrow} alt="Use current location" className="w-4 h-4" />
          Use Current Location
        </button>
      </div>

      {/* Hidden map used only for PlacesService */}
      <GoogleMap
        center={{ lat: 0, lng: 0 }}
        zoom={15}
        mapContainerStyle={{ height: "0px", width: "0px" }}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      ></GoogleMap>

      {/* Loading / Error Messages */}
      {loading && <p className="text-center text-blue-500">Loading nearby centers...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      <div className="mb-6">
        <h2 className="font-semibold text-sm md:text-[18px] mb-4">
          {screeningResults.length} Screening Centres Found
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screeningResults.map((center, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-md flex flex-col justify-between animate-slide-up"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <p className="font-semibold text-[#101828] text-[14px] md:text-[15px] lg:text-base leading-tight">
                    {center.name}
                  </p>
                </div>

                <div className="text-[13px] text-[#4A5565] flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <img src={locationPin} alt="location" className="w-4 h-4 mt-[2px]" />
                    <p>{center.address}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={greyPhoneIcon} alt="phone" className="w-4 h-4 mt-[2px]" />
                    <p>Phone info coming soon</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={greyClockIcon} alt="clock" className="w-4 h-4 mt-[2px]" />
                    <p>Hours info coming soon</p>
                  </div>
                </div>
              </div>

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
