import React, { useState } from "react";
import Logo from "../assest/images/Logo.svg";
import HeroImage from "../assest/images/HeroImage.png";
import HeroImageLeft from "../assest/images/HeroImageLeft.png";
import Preffix from "../assest/images/Preffix.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSliderData } from "../data/HeroSliderData";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Hamburger from "../assest/images/Hamburger.svg";
import ContentWithImage from "../components/ContentWithImage";
import Slider from "../components/Slider";
import CampaignAction from "../components/CampaignAction";
import CampaignRequired from "../components/CampaignRequired";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../redux/actions/CampaignActions";

const Home = () => {
  const dispatch = useDispatch();
  const isSideBar = useSelector((state) => state.isSideBar);
  return (
    <Layout>
      <div>
        <section
          className={`${
            isSideBar ? "-right-full" : "right-0"
          } transition-all duration-[0.5s] ease-in-out relative  bg-hero-bg w-full`}
          id="home"
        >
          <div
            className={`absolute cursor-pointer ${
              isSideBar ? "-right-full" : "right-0"
            } transition-all duration-[0.5s] ease-in-out w-[59px] z-10 h-full  border-l-2 ${
              isSideBar ? "border-white" : "border-nav"
            }  `}
            onClick={() => dispatch(setSideBar())}
          >
            <img
              src={Hamburger}
              alt="Hamberger open"
              className="absolute w-[65%] left-1/2 -translate-x-1/2 h-screen"
            />
          </div>
          <figure>
            <img src={Logo} alt="Activatar" />
          </figure>
          <div className="pt-5 flex justify-between items-center pb-9 px-14">
            <figure className="basis-[50%]">
              <img src={HeroImage} />
            </figure>
            <figure className="relative basis-[50%]">
              <img src={HeroImageLeft} alt="hero" />
            </figure>
          </div>
          <p className="text-center relative z-[3] backdrop italic font-semibold text-[#4A0292} leading-[72px] text-[50px] tracking-[6%] pb-[110px] after:content-[''] after:w-[494px] after:h-[79px] after:left-[60%] after:-translate-x-1/2 after:absolute after:-z-10 ">
            {" "}
            Unleash Your Brand's Power!
            <figure className="absolute bottom-[-25px] left-[48.5%] -translate-x-1/2">
              <img src={Preffix} alt="prefixx" />
            </figure>
          </p>
          <div className="hero-slider">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="mySwiper z-20 !important"
            >
              {HeroSliderData.map((ele) => (
                <SwiperSlide
                  className={`text-center italic font-extrabold text-[36px] leading-9 tracking-[7.5%] py-7 border-t-4 border-b-4 border-black`}
                  key={ele.sliderName}
                  style={{ color: ele.color }}
                >
                  {ele.sliderName ? ele.sliderName.toLocaleUpperCase() : ""}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="bg-nav">
          <ContentWithImage title="CAMPAIGN IDEAS" isCampaignIdeas={true} />
        </section>
        <section>
          <Slider />
        </section>
        <section id="createcamapaign">
          <div className="bg-[#F3CB3B] pt-10 pb-24">
            <ContentWithImage title="Create Campaign" />
          </div>
          <div className="bg-[#4700FF] flex justify-between">
            <CampaignAction />
            <CampaignRequired />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
