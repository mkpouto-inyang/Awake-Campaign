import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../custom-css/swipableCards.css";
import RightArrow from "../assets/icons/RightArrow.svg";
import Button from "./Button";
import EventCard from "../components/EventCard";
import { useEvents } from "../hooks/useEvents";

const WhatWeDoSection = () => {
  const navigate = useNavigate();

  const { isPending, isError, data, error } = useEvents();

  if (isError) {
    console.log(error.message);
    return <span>Error</span>;
  }

  const events = data ?? [];

  const handleEventClick = (eventId) => {
    navigate(`/campaign-events/${eventId}`);
  };

  return (
    <section className="mb-5 max-w-[1200px] mx-auto">
      <div className="flex justify-center autoShow">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark text-center mb-5 lg:mb-10 mt-[40px] lg:mt-[70px]">
          What We're Doing
        </h1>
      </div>

      <p className="text-[12px] md:text-[14px] lg:text-[18px] w-[88%] max-w-4xl text-[#4A5565] leading-relaxed text-center mx-auto mb-12 md:mb-20 autoShow">
        The AWAKE campaign is a comprehensive approach to cervical cancer
        prevention, combining awareness, education, and direct action to save lives.
      </p>

      <div className="px-7 md:px-9 autoScaleIn">
        {isPending ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-[100%]"
          >
            {events.map((event) => (
              <SwiperSlide key={event._id}>
                <EventCard
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  venue={event.venue}
                  attended={`${event.attended} people`}
                  image={event.thumbnailUrl}
                  onClick={() => handleEventClick(event._id)}
                  showViewDetails
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="flex justify-center mt-10 mb-20 px-12">
        <Button
          variant="orangeOutline"
          className="flex items-center text-[12px] md:text-[14px] lg:text-[16px] font-normal px-2 py-2 sm:px-6 sm:py-3 gap-2 w-[200px] md:w-[300px] lg:w-[350px] autoShow"
          onClick={() => navigate("/campaign-events")}
        >
          View All Campaign Events
          <img
            src={RightArrow}
            alt="Right Arrow"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </Button>
      </div>
    </section>
  );
};

export default WhatWeDoSection;