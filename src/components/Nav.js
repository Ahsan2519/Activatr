import React from "react";
import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";
import Hamburger from "../assest/images/Hamburger.svg";
import Close from "../assest/images/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../redux/actions/CampaignActions";

const Nav = () => {
  const dispatch = useDispatch();
  const isSideBar = useSelector((state) => state.isSideBar);
  return (
    <header
      className={`absolute h-screen w-full flex justify-between right-0  overflow-hidden`}
    >
      <nav
        className={`pt-60 pl-20 absolute w-full h-screen bg-nav-bg transition-all duration-[0.5s] ease-in-out pr-[59px] bg-nav  ${
          isSideBar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {NavData?.map((item) => (
            <NavLink
              key={item.nav}
              to={item.url}
              className="text-white font-semibold tracking-[1.5%] leading-[92pz] text-[64px] z-50 "
            >
              {item.nav}
            </NavLink>
          ))}
        </ul>
        <div
          className={`absolute cursor-pointer right-0 translate-x-0 w-[59px] top-0 h-screen  border-l-2 ${
            isSideBar ? "border-white" : "border-nav"
          }  `}
          // onClick={() => setIsSideBar((prev) => !prev)}
          onClick={() => dispatch(setSideBar())}
        >
          <img
            src={Close}
            alt="Hamberger Close"
            className="absolute w-[85%] left-1/2 -translate-x-1/2 h-screen"
          />
        </div>
      </nav>
      {/* <div
        className={`absolute cursor-pointer ${
          isSideBar ? "-right-full" : "right-0"
        } transition-all duration-[0.5s] ease-in-out w-[59px] z-10 h-screen  border-l-2 ${
          isSideBar ? "border-white" : "border-nav"
        }  `}
        onClick={() => setIsSideBar((prev) => !prev)}
      >
        <img
          src={Hamburger}
          alt="Hamberger open"
          className="absolute w-[65%] left-1/2 -translate-x-1/2 h-screen"
        />
      </div> */}
    </header>
  );
};

export default Nav;
