import { useState, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox
} from "@react-google-maps/api";

import searchIcon from "../assets/icons/search.svg";
import locationPin from "../assets/icons/location.svg";
import greyClockIcon from "../assets/icons/greyClockIcon.svg";
import directionIcon from "../assets/icons/blackLocationArrow.svg";
import greyPhoneIcon from "../assets/icons/greyPhoneIcon.svg";

const ScreeningCentres = () => {
  const [location, setLocation] = useState(null);
  const [screeningResults, setScreeningResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const mapRef = useRef(null);
  const inputRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"]
  });

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
          lng: position.coords.longitude
        };
        setLocation(coords);
        getNearbyPlaces(coords);
      },
      () => {
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

  const handleInputChange = async (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (!newValue.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/autocomplete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input: newValue, location })
      });

      const data = await res.json();
      const predictions = data.suggestions?.map(
        (sug) => sug.placePrediction?.text?.text || ""
      );
      setSuggestions(predictions.filter(Boolean));
    } catch (err) {
      console.error("Autocomplete failed", err);
    }
  };

  const handleSuggestionClick = async (selectedText) => {
    setInputValue(selectedText);
    setSuggestions([]);

    try {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: selectedText }, (results, status) => {
        if (status === "OK" && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          const coords = { lat: lat(), lng: lng() };
          setLocation(coords);
          getNearbyPlaces(coords);
        }
      });
    } catch (err) {
      console.error("Geocoding failed", err);
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
        <div className="flex flex-col md:flex-row gap-4 items-center w-full relative">
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter any address within Nigeria to locate centers nearby"
            className="w-full md:flex-1 px-3 py-2 md:px-4 md:py-[10px] rounded-md border border-gray-200 bg-input-grey text-[13px] md:text-sm placeholder:text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-md shadow z-10">
              {suggestions.map((sug, i) => (
                <li
                  key={i}
                  onClick={() => handleSuggestionClick(sug)}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {sug}
                </li>
              ))}
            </ul>
          )}

          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-[10px] text-white bg-black hover:bg-gray-800 rounded-md text-[13px] md:text-sm">
            <img src={searchIcon} alt="search icon" className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>

      {screeningResults.length === 0 && !loading && (
        <div className="text-center mb-10">
          <button
            onClick={handleUseCurrentLocation}
            className="flex items-center gap-2 text-teal-primary text-[12px] md:text-[14px] font-medium mx-auto"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2657 1.98829L1.98469 8.31429L6.81369 10.3203C8.22502 10.9061 9.34636 12.0278 9.93169 13.4393L11.9377 18.2673L18.2657 1.98829ZM20.1127 2.67029L13.7847 18.9513C13.3847 19.9813 12.2337 20.5083 11.2137 20.1313C10.9651 20.0397 10.7381 19.8976 10.5471 19.7139C10.356 19.5303 10.2051 19.3091 10.1037 19.0643L8.09669 14.2343C7.70579 13.2939 6.95825 12.5467 6.01769 12.1563L1.18969 10.1503C0.18569 9.73329 -0.27231 8.57429 0.16669 7.56029C0.27454 7.31243 0.430343 7.08835 0.625133 6.90094C0.819923 6.71353 1.04985 6.56649 1.30169 6.46829L17.5827 0.14029C17.9364 -0.00185326 18.324 -0.0369348 18.6975 0.0394048C19.071 0.115744 19.4138 0.30014 19.6833 0.569678C19.9528 0.839216 20.1372 1.18201 20.2136 1.55548C20.2899 1.92894 20.2548 2.3166 20.1127 2.67029Z"
                fill="#009689"
              />
            </svg>
            Use Current Location
          </button>
        </div>
      )}

      <GoogleMap
        center={{ lat: 0, lng: 0 }}
        zoom={15}
        mapContainerStyle={{ height: "0px", width: "0px" }}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      />

      {loading && (
        <div className="flex justify-center mb-6">
          <div className="h-6 w-6 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {screeningResults.length > 0 && (
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
                      <img
                        src={locationPin}
                        alt="location"
                        className="w-4 h-4 mt-[2px]"
                      />
                      <p>{center.address}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <img
                        src={greyPhoneIcon}
                        alt="phone"
                        className="w-4 h-4 mt-[2px]"
                      />
                      <p>Phone info coming soon</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <img
                        src={greyClockIcon}
                        alt="clock"
                        className="w-4 h-4 mt-[2px]"
                      />
                      <p>Hours info coming soon</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-200 rounded-md text-[12px] lg:text-sm text-gray-800 font-medium">
                    <img
                      src={directionIcon}
                      alt="directions"
                      className="w-[10px] h-[10px] lg:w-4 lg:h-4"
                    />
                    Get Directions
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-gray-100 border border-gray-200 rounded-md text-[12px] lg:text-sm text-gray-800 font-medium">
                    <img
                      src={greyPhoneIcon}
                      alt="call"
                      className="w-[10px] h-[10px] lg:w-4 lg:h-4"
                    />
                    Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ScreeningCentres;
