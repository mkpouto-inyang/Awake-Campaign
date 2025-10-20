import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import teamImage from "../assets/icons/teamMemberImage.svg";

const AboutUs = () => {
  const team = [
    {
      name: "Mkpouto Inyang",
      role: "Campaign strategist / the baddest",
      image: teamImage,
    },
    {
      name: "Ire Belles",
      role: "Founder & Filmmaker",
      image: teamImage,
    },
    {
      name: "Sebbecly Advocate",
      role: "Health Advocacy Lead",
      image: teamImage,
    },
    {
      name: "Chinedu Okafor",
      role: "Community Mobilizer",
      image: teamImage,
    },
  ];

  return (
    <section className="px-4 md:px-8 py-[100px] max-w-6xl mx-auto">
      {/* About Content */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 mb-16">
        {/* Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={teamImage}
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed">
          <p className="mb-4">
            The AWAKE campaign is a bold, youth-led movement tackling cervical
            cancer through awareness, action, and advocacy. Founded by Nigerian
            filmmaker and spoken word artist Ireayoluwaintemi Olota — known
            professionally as Ire Belles —
          </p>
          <p className="mb-4">
            AWAKE began as a response to a silent crisis: the rising toll of
            cervical cancer on women in Nigeria.
          </p>
          <p className="mb-4">
            In collaboration with health advocate Sebbecly and powered by a
            passionate team of creatives, health workers, and young
            changemakers, AWAKE leverages the power of storytelling, film, and
            community engagement to make cervical health education mainstream.
          </p>
        </div>
      </div>

      {/* Meet the Team Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[36px] font-bold text-blue-dark">
          Meet <span className="text-teal-primary">the Team</span>
        </h2>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="text-center mb-10 px-6 py-8 bg-white rounded-lg shadow-md">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-[14px] md:text-[16px] text-gray-900">
                {member.name}
              </h3>
              <p className="text-[12px] md:text-[14px] text-blue-dark mt-1">
                {member.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutUs;
