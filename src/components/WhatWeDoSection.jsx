import eventImage1 from "../assets/static-images/event-img-1.png";
import eventImage2 from "../assets/static-images/event-img-1.png";
import eventImage3 from "../assets/static-images/event-img-1.png";
import EventCard from "../components/EventCard";

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

      <div className="flex flex-wrap gap-[48px] justify-center mb-[80px]">
        <EventCard
          title="Community Screening"
          date="March 15, 2025"
          location="Downtown Health Center"
          attendees="To be determined"
          image={eventImage1}
        />
        <EventCard
          title="AWAKE Documentary Premiere"
          date="March 15, 2025"
          location="Downtown Health Center"
          attendees="To be determined"
          image={eventImage2}
        />
        <EventCard
          title="Community Screening"
          date="March 15, 2025"
          location="Downtown Health Center"
          attendees="200 people in attendance"
          image={eventImage3}
        />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
