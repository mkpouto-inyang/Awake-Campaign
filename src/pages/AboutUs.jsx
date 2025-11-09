import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import teamImage from "../assets/icons/teamMemberImage.svg";
import campaignPoster from "../assets/static-images/Awake-poster.jpeg"

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
      <div className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden flex flex-col md:flex-row mb-12">
      {/* Poster Section (30%) */}
      <div className="w-full md:w-[40%] h-64 md:h-auto">
        <img
          src={campaignPoster}
          alt="Campaign Poster"
          className="w-full"
        />
      </div>

      {/* Text Section (70%) */}
      <div className="w-full md:w-[70%] p-6 md:p-8 flex flex-col justify-center">
        <p className="whitespace-pre-line text-sm md:text-base text-gray-800 leading-relaxed">
          {`AWAKE is a youth-led movement tackling cervical cancer through awareness, action, and advocacy.

It was founded by Nigerian filmmaker and spoken word artist Ireayoluwaintemi Olota (Ire Belles) after a documentary project exposed the silent crisis of cervical cancer in Nigeria.

In partnership with Sebeccly Cancer Care and powered by creatives, health workers, and young advocates, AWAKE uses storytelling, film, and grassroots outreach to bring cervical health education to the mainstream.

Through screenings, campus events, social media, and partnerships with health organizations, AWAKE promotes early testing and vaccination, helping women across Nigeria take charge of their health.

It’s more than awareness — it’s about saving lives through information, creativity, and collective effort.`}

        </p>
      </div>
    </div>

      {/* Meet the Team Heading */}
      <div className="text-center mb-10 ">
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
