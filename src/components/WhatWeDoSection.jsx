import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import eventImage1 from "../assets/static-images/event-img-1.png";
import eventImage2 from "../assets/static-images/event-img-1.png";
import eventImage3 from "../assets/static-images/event-img-1.png";

import EventCard from "../components/EventCard";

const eventData = [
  {
    title: "Community Screening1",
    date: "March 15, 2025",
    location: "Downtown Health Center",
    attendees: "To be determined",
    image: eventImage1
  },
  {
    title: "Community Screening2",
    date: "March 22, 2025",
    location: "Civic Hall, Lagos",
    attendees: "300 guests expected",
    image: eventImage2
  },
  {
    title: "Community Screening3",
    date: "April 10, 2025",
    location: "Lagos Island Community Center",
    attendees: "200 people in attendance",
    image: eventImage3
  },
    {
    title: "Community Screening4",
    date: "March 22, 2025",
    location: "Civic Hall, Lagos",
    attendees: "300 guests expected",
    image: eventImage2
  },
  {
    title: "Community Screening5",
    date: "April 10, 2025",
    location: "Lagos Island Community Center",
    attendees: "200 people in attendance",
    image: eventImage3
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="px-4">
      <div className="flex justify-center">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark text-center mb-5 lg:mb-10 mt-[40px] lg:mt-[70px]">
          What We're Doing
        </h1>
      </div>

      <p className="text-[12px] md:text-[14px] lg:text-[18px] max-w-4xl text-[#4A5565] leading-relaxed text-center mx-auto mb-12 md:mb-20">
        The AWAKE campaign is a comprehensive approach to cervical cancer prevention,
        combining awareness, education, and direct action to save lives.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-[94%] lg:max-w-[80%] mx-auto"
      >
        {eventData.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard {...event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatWeDoSection;
