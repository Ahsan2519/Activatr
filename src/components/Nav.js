import React, { useRef } from "react";
import { NavData } from "../data/NavData";
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
    console.log(ref.current);
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="absolute h-screen w-full flex justify-between right-0  overflow-hidden">
      <nav
        className={`pt-60 pl-20 absolute w-full h-screen bg-nav-bg transition-all duration-[0.5s] ease-in-out pr-[59px] bg-nav  ${
          isSideBar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {NavData?.map((item) => (
            <li key={item.nav}>
              <button
                className="text-white font-semibold tracking-[1.5%] leading-[92pz] text-[64px] z-50 "
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
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
