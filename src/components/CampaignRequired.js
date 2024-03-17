import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setHeading, setType } from "../redux/actions/CampaignActions";
import TimePickers from "./TimePicker";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const compaginType = [
  {
    img: "assets/image/Type1.svg",
    field: "Pictivatr",
  },
  {
    img: "assets/image/Type2.svg",
    field: "Pledge",
  },
  {
    img: "assets/image/Type3.svg",
    field: "Survey",
  },
  {
    img: "assets/image/Type4.svg",
    field: "Quiz",
  },
  {
    img: "assets/image/Type5.svg",
    field: "Video based Quiz",
  },
  {
    img: "assets/image/Type6.svg",
    field: "GAmification",
  },
  {
    img: "assets/image/Type7.svg",
    field: "Educational ideas",
  },
];

const DataField = [
  {
    img: "assets/image/Field1.svg",
    field: "Impression",
  },
  {
    img: "assets/image/Field2.svg",
    field: "Engagement",
  },
  {
    img: "assets/image/Field3.svg",
    field: "Social Media Followers",
  },
  {
    img: "assets/image/Field4.svg",
    field: "Leads and Sales",
  },
  {
    img: "assets/image/Field5.svg",
    field: "Brand Awarness",
  },
  {
    img: "assets/image/Field6.svg",
    field: "Analytics + Leaderboard",
  },
];

const CampaignRequired = () => {
  const type = useSelector((state) => state.type);
  const heading = useSelector((state) => state.heading);
  const dispatch = useDispatch();
  const getData = type === "compaign types" ? compaginType : DataField;
  const [data, setData] = useState(getData);
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setData(getData);
  }, [type]);

  const campaignHandler = () => {
    if (type === "data field") {
      dispatch(setType("duration"));
      dispatch(setHeading("Select Duration of campaign"));
      console.log("type", type);
    } else if (type === "duration") {
      dispatch(setType("contact"));
      dispatch(setHeading("Contact details"));
    } else if (type === "contact") {
      navigate('/completed');
    } 
    else {
      dispatch(setHeading("Select data fields to be collected"));
      dispatch(setType("data field"));
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const backHandler = () => {
    if (type === "duration") {
      dispatch(setType("data field"));
      dispatch(setHeading("Select data fields to be collected"));
    } else if (type === "contact") {
      dispatch(setType("duration"));
      dispatch(setHeading("Select Duration of campaign"));
    }
     else {
      dispatch(setType("compaign types"));
      dispatch(setHeading("Select Campaign Type"));
    }
  };

  return (
    <div className="bg-white my-5 mx-8 rounded-2xl basis-[51%]">
      <h3
        className={`font-bold  tracking-[5.5%] text-center text-[#3D159F]  mt-2 ${
          heading === "Select data fields to be collected"
            ? "text-[40px] leading-[47px] mb-10 px-52"
            : "text-[36px] leading-14"
        }`}
      >
        {heading.toUpperCase()}
      </h3>
      {type === "compaign types" || type === "data field" ? (
        <>
          <ul
            className={`flex items-center flex-wrap  gap-5 pl-2 py-3 ${
              heading === "Select data fields to be collected" ? "mb-16" : ""
            }`}
          >
            {data.map((val) => (
              <li
                key={val.field}
                className={`basis-[30%] flex flex-col justify-center items-center cursor-pointer ${
                  heading === "Select data fields to be collected" ? "mb-4" : ""
                }`}
                onClick={() => handleTypeSelect(val.field)}
                style={{
                  boxShadow:
                    val.field === selectedType
                      ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                      : "none",
                  borderRadius: val.field === selectedType ? "10px" : "0",
                }}
              >
                <figure className="bg-[#3D159F70] rounded-2xl flex flex-col justify-center items-center w-[166px] h-[166px]">
                  <img src={val.img} alt={val.field} />
                </figure>
                <p
                  className={`text-[24px] font-semibold py-1 text-center ${
                    heading === "Select data fields to be collected"
                      ? "leading-7 my-2"
                      : "leading-9"
                  }`}
                >
                  {val.field}
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : type === "duration" ? (
        <TimePickers />
      ) : type === "contact" ? (
        <>
          <Contact/>
        </>
      ) : null}
      <div className="text-center mb-5 ">
        {type !== "compaign types" && (
          <Button
            text="Go BAck"
            className={`font-semibold text-[24px] leading-9  text-[#4700FF] underline  px-12 py-1`}
            onclick={() => backHandler()}
          />
        )}
        <Button
          disabled={selectedType === ""}
          text="Next"
          className={`font-semibold text-[24px] leading-9 ${
            selectedType ? "bg-[#4700FF]" : "bg-gray-400"
          } text-white  px-12 py-1`}
          onclick={() => campaignHandler()}
        />
      </div>
    </div>
  );
};

export default CampaignRequired;
