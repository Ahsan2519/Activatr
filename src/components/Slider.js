import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const getIndices = (currentIndex, arrayLength) => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      let index = (currentIndex + i) % arrayLength;
      indices.push(index);
    }
    return indices;
  };
  
  
  const handleButtonClick = () => {
    if (currentIndex === SliderData.length - 1) {
      // If on the last slide, go back to the first slide
      setCurrentIndex(0);
    } else {
      // Otherwise, proceed to the next slide
      setCurrentIndex((currentIndex + 1) % SliderData.length);
    }
  };

  const renderSlides = () => {
    const indices = getIndices(currentIndex, SliderData.length);

    return indices.map((index, i) => (
      console.log('i:',i),
      <div
        key={i}
        className={`bg-[#9E04C5] rounded-[20px] pb-3 ${
          i === currentIndex ? "w-[330px]" : "w-[180px]"
        }`}
      >
        <img
          src={SliderData[index].img}
          className="max-w-[75%] my-3 mx-auto"
          alt="Slide "
        />
        <h2
          className={`text-white text-center font-semibold ${
            i === currentIndex
              ? " text-[40px] leading-[48px] "
              : "text-[28px] leading-10"
          }`}
        >
          {SliderData[index].title}
        </h2>
        {i === currentIndex && (
          <p className="text-white text-center text-[24px] leading-[34px] font-semibold">
            {SliderData[index].description}
          </p>
        )}
      </div>
    ));
  };

  const renderDots = () => {
    return SliderData.map((_, index) => (
      <span
        key={index}
        className={`block w-8 h-8  rounded-full ${
          index === currentIndex ? "bg-[#9E04C5]" : "bg-[#9F8DCF]"
        }`}
        onClick={() => setCurrentIndex(index)}
      ></span>
    ));
  };

  return (
    <>
      <div className=" bg-[#F2DAFB] pt-28 pb-16">
        <div className="lg:flex items-center justify-center">
          <h1
            className="lg:rotate-[270deg] h-[200px] text-center text-[#9E04C5] tracking-bold uppercase leading-[92px] text-[64px] tracking-[6px] font-semibold"
            style={{
              textShadow: `7px 0px 0px #000`,
            }}
          >
            Metric Measures
          </h1>
          <div className="flex gap-5 basis-[60%]">{renderSlides()}</div>
        </div>
        <div className="flex justify-center items-center gap-6 cursor-pointer  mt-7">
          {renderDots()}
          <button
            onClick={handleButtonClick}
            className={`${
              currentIndex !== SliderData.length - 1
                ? "w-8 h-8 bg-black text-white flex justify-center items-center  rounded-full"
                : ""
            }`}
          >
            {currentIndex === SliderData.length - 1 ? (
              "Go Back"
            ) : (
              <AiOutlineArrowRight />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
