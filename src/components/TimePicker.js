import React, { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";

const TimePickers = () => {
  const [timeValue, setTimeValue] = useState(dayjs("2022-04-17T15:30"));
  const [dateValue, setDateValue] = useState(dayjs("2022-04-17"));

  const handleTimeChange = (newValue) => {
    setTimeValue(newValue);
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleDateConfirm = () => {
    console.log("Selected date:", dateValue.format("YYYY-MM-DD"));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-9 text-[24px] text-[#0F0F0F] leading-9 font-medium">
        Pick a time
      </p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["TimePicker"]}
          sx={{
            "& MuiStack-root": {
              border: "2px solid #AF9FD8 ",
            },
            "& .MuiFormControl-root.MuiTextField-root": {
              background: "#AF9FD8",
              maxWidth: "220px",
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              color: "#000",
              fontWeight: "700",
              fontSize: "36px",
              padding: "11px",
              paddingLeft: "10px",
            },
            "& .MuiFormLabel-root.MuiInputLabel-root": {
              color: "#000",
              fontWeight: "700",
              fontSize: "36px",
              padding: "0",
              paddingLeft: "10px",
            },
            "& .MuiButtonBase-root.MuiIconButton-root": {
              color: "#000",
              fontWeight: "700",
            },
          }}
        >
          <TimePicker value={timeValue} onChange={handleTimeChange} />
        </DemoContainer>
      </LocalizationProvider>
      <div className="mb-[92px] mt-14">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["StaticDatePicker"]} sx={
            {
                "& .MuiDateCalendar-root": {
                    border:'2px solid #000',
                    borderRadius: '20px'
                  },
            }
          }>
            <DemoItem>
              <StaticDatePicker
                value={dateValue}
                onChange={handleDateChange}
                onAccept={handleDateConfirm}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default TimePickers;
