import React from "react";
import WhiteLogo from "../assest/images/WhiteLogo.svg";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer text-white px-10 text-[24px] leading-9 tracking-[1.5%]">
      <div className="flex justify-between items-start border-b border-white">
        <figure>
          <img src={WhiteLogo} alt="Activatr" />
        </figure>
        <ul className="basis-[30%] flex justify-between gap-4 flex-col pt-8">
          <li className="basis-[35%] font-normal">
            <a
              href="mailto:contact@vistaardigital.com"
              className="flex items-center"
              rel="noreferrer"
            >
              <span className="pr-2">
                <IoMdMail />
              </span>{" "}
              contact@vistaardigital.com
            </a>
          </li>
          <li className="basis-[255%] font-normal ">
            <a
              href="https://www.instagram.com/vistaardigital/"
              target="_blank"
              className="flex items-center"
              rel="noreferrer"
            >
              <span className="pr-2">
                <FaInstagram />
              </span>{" "}
              vistaardigital
            </a>
          </li>
        </ul>
        <div className="basis-[45%] font-normal pt-8 pr-10">
          <address className="flex items-start">
            <span className="pr-2 pt-2">
              <FaLocationDot />
            </span>{" "}
            Paras Business Center, Unit 602, Kasturbha Cross Rd Number 1, Near
            Kasturbha Police Station, Borivali East, Mumbai 400066, MH, India.
          </address>
        </div>
      </div>
      <p className="text-center py-4 ">
        2018 © Copyright Vistaar Digital. All rights Reserved. Platform By
        Vistaardigital
      </p>
    </footer>
  );
};

export default Footer
