import React from "react";
import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";
import Close from "../assest/images/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../redux/actions/CampaignActions";

const Nav = ({
  campaignIdeasRef,
  metricMeasuresRef,
  createCampaignRef,
  homeRef,
}) => {
  const dispatch = useDispatch();
  const isSideBar = useSelector((state) => state.isSideBar);
  const scrollToRef = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header
      className={`absolute h-screen w-full flex justify-between right-0  overflow-hidden`}
    >
      <nav
        className={`md:pt-60 extrasmall:pt-32 pt-20  pl-20 absolute w-full h-screen bg-nav-bg transition-all duration-[0.5s] ease-in-out pr-[59px] bg-nav  ${
          isSideBar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {NavData?.map((item) => (
            <NavLink
              key={item.nav}
              to={item.url}
              className="text-white font-semibold tracking-[1.5%] leading-[78px] md:leading-[92px] text-[42px]  md:text-[64px] z-50 "
              onClick={() => {
                if (item.url === "#campaignideas") {
                  scrollToRef(campaignIdeasRef);
                } else if (item.url === "#metricmeasures") {
                  scrollToRef(metricMeasuresRef);
                } else if (item.url === "#createcamapaign") {
                  scrollToRef(createCampaignRef);
                } else if (item.url === "#home") {
                  scrollToRef(homeRef);
                }
                dispatch(setSideBar());
              }}
            >
              {item.nav}
            </NavLink>
          ))}
        </ul>
        <div
          className={`absolute cursor-pointer right-0 translate-x-0 w-[59px] top-0 h-screen  border-l-2 ${
            isSideBar ? "border-white" : "border-nav"
          }  `}
          onClick={() => dispatch(setSideBar())}
        >
          <img
            src={Close}
            alt="Hamberger Close"
            className="absolute w-[85%] left-1/2 -translate-x-1/2 h-screen"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
