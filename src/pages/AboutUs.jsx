import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import IreBelles from "../assets/icons/teamMemberImage.svg";
import MkImg from "../assets/static-images/Mk.jpg"
import OluchiImg from "../assets/static-images/Oluchiii.jpg"
import FathiaImg from "../assets/static-images/Fathiaaa.jpg"
import campaignPoster from "../assets/static-images/Awake-poster.jpeg";

const AboutUs = () => {
  const team = [
     {
      name: "Ire Belles",
      role: "Campaign Lead/ Filmmaker",
      image: IreBelles,
    },
    {
      name: "Fathia Salauddin",
      role: "Strategy",
      image: FathiaImg,
    },
    {
      name: "Mkpouto Inyang",
      role: "Web Development/ strategy",
      image: MkImg,
    },
     {
      name: "Oluchi Offor",
      role: "Social Media Management",
      image: OluchiImg,
    }
  ];

  return (
    <section className="px-4 md:px-8 py-[50px] lg:py-[100px] max-w-6xl mx-auto">
      <div className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden flex flex-col md:flex-row mb-14 animate-slide-up">

          <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row w-full">
            {/* Image */}
            <div className="w-full md:w-[40%]">
              <img
                src={campaignPoster}
                alt="Poster"
                className="w-full h-full object-cover block rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[60%] p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-800 leading-relaxed whitespace-pre-line">
                {`AWAKE is a youth-led movement tackling cervical cancer in Nigeria through film, advocacy, and action.

                It was founded by Nigerian filmmaker and spoken word artist Ireayooluwanitemi Olota,(Ire Belles) after a documentary project exposed the silent crisis of cervical cancer in Nigeria.

                In partnership with Sebeccly Cancer Care and powered by creatives, health workers, and young advocates, AWAKE uses storytelling, and community outreach to bring cervical health education to the mainstream.

                Our goals are to educate 1 million Nigerians through documentary screenings and media, offer 1000 free cervical cancer screenings and 500 HPV vaccines and ultimately inspire collective advocacy against cervical cancer in Nigeria. 
                
                It’s more than awareness — it’s a movement to protect the future of women in Nigeria and ignite a generation that refuses to stay silent. We are AWAKE..`}
              </p>
            </div>
          </div>
        </div>

      {/* Meet the Team Heading */}
      <div className="text-center mb-10 animate-slide-up">
        <h2 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold text-blue-dark">
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
            <div className="text-center mb-10 px-6 py-8 bg-white rounded-lg shadow-md animate-slide-up">
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
