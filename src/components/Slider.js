import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper modules
import { Pagination } from "swiper/modules";

const SliderData = [
  {
    img: "assets/image/Rectangle.svg",
    title: "Impression",
    description: "The number of people who have seen your campaign",
  },
  {
    img: "assets/image/Rectangle1.svg",
    title: "Engagement",
    description:
      "The level of interaction your campaign has received, such as clicks, likes, shares, and comments",
  },
  {
    img: "assets/image/Rectangle2.svg",
    title: "Social Media Followers",
    description:
      "The increase in social media followers your campaign has generated.",
  },
  {
    img: "assets/image/Rectangle3.svg",
    title: "Impression",
    description: "The number of people who have seen your campaign",
  },
  {
    img: "assets/image/Rectangle4.svg",
    title: "Leads and Sales",
    description: "The number of leads and sales your campaign has generated.",
  },
];

const Slider = () => {
  return (
    <div className="flex items-center justify-start ">
      <h1
        className="rotate-[270deg] h-[200px] text-center text-[#9E04C5] tracking-bold uppercase leading-[92px] text-[64px] tracking-[6px] font-semibold"
        style={{
          textShadow: `7px 0px 0px #000`,
        }}
      >
        Metric Measures
      </h1>
      <div className="w-[calc(100%-366px)]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full"
        >
          {SliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
              <img src={slide.img} className="object-contain" alt={slide.title} />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
