import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RightArrow from "../assets/icons/RightArrow.svg";

import Button from "./Button";

const testimonials = [
  {
    quote: `“At 32, I went for my first cervical cancer screening through a free community program. The doctors found precancerous cells early, and I was able to get treatment before it was too late. Today, I share my story so other women can take screening seriously. Early detection truly saves lives.”`,
    author: "Ngozi",
    age: 54,
  },
  {
    quote: `“When we heard about the AWAKE Challenge, our student group created a street campaign to talk to women about the HPV vaccine. In just one week, we reached over 1,000 people with information that could save lives. We are proof that young people can spark big change.”`,
    author: "Anonymous",
    age: null,
  },
  {
    quote: `“I lost my elder sister to cervical cancer when she was only 39. Watching her suffer opened my eyes to how dangerous silence and stigma can be. Since then, I’ve made it my mission to speak to men and families about supporting the women in their lives to get screened and vaccinated. Cervical cancer is not just a women’s issue — it’s a family issue, and we all have a role to play.”`,
    author: "Daniel",
    age: 28,
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-5 pt-12 pb-0 md:pt-20 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16 ">
        <h1 className="font-bold text-[20px] md:text-[38px] lg:text-[50px] text-blue-dark mb-5 autoShow">
          Real Stories. Real Impact.
        </h1>
        <p className="text-[12px] md:text-[14px] lg:text-[18px] text-[#4A5565] max-w-3xl mx-auto autoShow  md:w-[80%]">
          Hear from individuals whose lives have been touched by awareness,
          screening, and the power of sharing their voice.
        </p>
      </div>

      {/* Mobile: Carousel view */}
      <div className="block md:hidden autoShow">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white rounded-md shadow-md p-6 relative min-h-[260px] animate-${index % 2 === 0 ? "slideInLeft" : "slideInRight"}`}
              >
                <div
                  className={`absolute ${index % 2 === 0 ? "left-0 rounded-r" : "right-0 rounded-l"} top-6 bottom-6 w-1 bg-teal-400`}
                ></div>
                <p className="text-gray-800 text-sm leading-relaxed pl-4">
                  {item.quote}
                </p>
                <p className="text-teal-700 font-semibold text-sm text-right mt-4 pr-2">
                  {item.author}
                  {item.age ? `, ${item.age}` : ""}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Stacked layout */}
      <div className="hidden md:flex flex-col gap-10 w-[88%] mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-md shadow-md p-8 relative animate-${index % 2 === 0 ? "slideInLeft" : "slideInRight"}`}
          >
            <div
              className={`absolute ${index % 2 === 0 ? "left-0 rounded-r" : "right-0 rounded-l"} top-6 bottom-6 w-1 bg-teal-400`}
            ></div>
            <p className="text-gray-800 text-sm xl:text-base leading-relaxed pl-4">
              {item.quote}
            </p>
            <p className="text-teal-700 font-semibold text-sm text-right mt-4 pr-2">
              {item.author}
              {item.age ? `, ${item.age}` : ""}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 mb-20 px-12 autoShow">
        <Button
          variant="orangeOutline"
          className="flex items-center text-[12px] md:text-[14px] lg:text-[16px] font-normal px-2 py-2 sm:px-6 sm:py-3 gap-2 w-[200px] md:w-[300px] lg:w-[350px]"
        >
          Read More Stories
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

export default TestimonialSection;
