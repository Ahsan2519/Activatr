import React from "react";
import Logo from "../assest/images/Logo.svg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ideasData = [
  {
    img: "/assets/image/Image1.png",
    heading: " Photo Activity (Pictivatr)",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    img: "/assets/image/Image2.png",
    heading: " Pledge",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    img: "/assets/image/Image3.png",
    heading: " Survey",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    img: "/assets/image/Image4.png",
    heading: " Quiz",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    img: "/assets/image/Image5.png",
    heading: "Video Quiz",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    img: "/assets/image/Image6.png",
    heading: " Gamification",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    img: "/assets/image/Image7.png",
    heading: "Educational Training",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
];

const CompaignIdeas = () => {
  const navigate = useNavigate()
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center">
        <figure>
          <img src={Logo} alt="Activatr" />
        </figure>
        <h1 className="font-semibold basis-[75%] xl:text-[100px] lg:text-[80px] leading-[143px] tracking-wide text-nav">
          Campaign Ideas
        </h1>
      </div>
      <ul>
        {ideasData.map((value, index) => (
          <li
            key={value.heading}
            className={`${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } lg:flex items-center justify-between mb-28`}
          >
            <div className={`basis-[68%] px-5 ${index % 2 === 0 ? "md:pl-16" : "lg:pl-32 md:pl-16"}`}>
              <h1 className={
                `text-[#4700FF] text-[48px] md:text-[64px]  leading-16 md:leading-[92px] tracking-wide  font-bold mb-5 ${index === 0 ? 'text-center 2xl:w-[53%] lg:w-[78%] w-full' : 'md:w-3/4 w-full'}`
              }>{value.heading}</h1>
              <p className="xl:pr-52 lg:pr-20 text-[32px] leading-[46px] mb-10 lg:mb-0 font-light">{value.para}</p>
            </div>
            <figure className="basis-[30%]">
              <img src={value.img} alt={value.heading} />
            </figure>
          </li>
        ))}
      </ul>
      <div className='text-center'>
       <Button text='Go to Home' className='text-[#000]  px-14 rounded-md cursor-pointer text-[40px] uppercase font-medium leading-[58px] bg-[#F3CB3B]' onclick={()=>navigate('/')}/>
       </div>
    </div>
  );
};

export default CompaignIdeas;
