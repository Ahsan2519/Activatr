import React, { useEffect, useState } from "react";
import { IdeasData } from "../data/IdeasData";
import Button from "./Button";
import { Link } from "react-router-dom";
import Bulb from "../assest/images/Bulb.svg";
import Spin from "../assest/images/Spin.svg";
import Feedback from "../assest/images/Feedback.svg";

const ContentWithImage = ({ title, isCampaignIdeas = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex < IdeasData.length - 1) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      <div className="flex justify-between items-center flex-col">
        <h2
          className={`text-[70px] uppercase text-white font-medium tracking-[6px] text-center  `}
          style={{
            textShadow:`-7px 0px 0px ${isCampaignIdeas ? '#2F42DC' : '#fff'}`,
            color: isCampaignIdeas ? '#fff' : '#2F42DC'
          }}
        >
          {title}
        </h2>
        {title === "CAMPAIGN IDEAS" ? (
          <figure>
            <img
              src={IdeasData[currentImageIndex]?.url}
              alt={IdeasData[currentImageIndex]?.title}
            />
          </figure>
        ) : (
          <>
            <figure>
              <img src={Bulb} alt="dummy bulb" />
            </figure>
            <div className="flex items-center relative">
              <figure>
                <img src={Spin} alt="dummy bulb" />
              </figure>
              <figure className="absolute top-1/2 -translate-y-1/2 w-full left-[68%]">
                <img src={Feedback} alt="dummy bulb" />
              </figure>
            </div>
          </>
        )}
      </div>
      {title === "CAMPAIGN IDEAS" && (
        <Link to={"/campaign/campaign-detail"} className="block text-center">
          <Button
            text="Know More"
            className="text-[48px] font-medium text-black bg-yellow-400 px-10 rounded-lg mb-14"
          />
        </Link>
      )}
    </>
  );
};

export default ContentWithImage;
