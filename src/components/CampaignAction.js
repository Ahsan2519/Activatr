import React from "react";
import PhotoRoom from "../assest/images/PhotoRoom.svg";
import Type from "../assest/images/Type.svg";
import DataField from "../assest/images/DataField.svg";
import Clock from "../assest/images/Clock.svg";
import ContactDetail from "../assest/images/ContactDetail.svg";
import Completed from "../assest/images/Completed.svg";
import Check from "../assest/images/Check.svg";
import { useSelector } from "react-redux";

const CampaignAction = () => {
  const type = useSelector(state => state.type);
  return (
    <div className="2xl:basis-[48%] xl:basis-[40%]">
      <figure className="pb-14 flex justify-center">
        <img src={PhotoRoom} alt=" Room" />
      </figure>
      <div className="font-semibold text-[32px] leading-[46px] text-white pl-14">
        <div className="flex items-center pb-9">
          <figure className="pr-5">
            <img src={Type} alt="Type" />
          </figure>
          Select campaign types{" "}
          {type === "compaign types" && (
            <figure className="pl-2">
              <img src={Check} alt="Checked" />
            </figure>
          )}
        </div>
        <div className="flex items-center pb-9">
          <figure className="pr-5">
            <img src={DataField} alt="Data Field" />
          </figure>
          Select data fields to be collected{" "}
          {type === "data field" && (
            <figure className="pl-2">
              <img src={Check} alt="Checked" />
            </figure>
          )}
        </div>
        <div className="flex items-center pb-9">
          <figure className="pr-5">
            <img src={Clock} alt="Duration" />
          </figure>
          Select Duration of campaign
          {type === "duration" && (
            <figure className="pl-2">
              <img src={Check} alt="Checked" />
            </figure>
          )}
        </div>
        <div className="flex items-center pb-9">
          <figure className="pr-5">
            <img src={ContactDetail} alt="Contact Detail" />
          </figure>
          Contact details
          {type === "contact" && (
            <figure className="pl-2">
              <img src={Check} alt="Checked" />
            </figure>
          )}
        </div>
        <div className="flex items-center pb-9">
          <figure className="pr-5">
            <img src={Completed} alt="Completed" />
          </figure>
          Completed
        </div>
      </div>
    </div>
  );
};

export default CampaignAction;
