import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import bannerBg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
const AppoinmentBanner = () => {
  const [date, setDate] = useState(new Date());

  //   let footer = <p>Please pick a day.</p>;
  //   if (date) {
  //     footer = <p>You picked {format(date, "PP")}.</p>;
  //   }

  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -140px",
      }}
    >
      <div className="container mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={chair}
              className="w-full max-w-lg rounded-lg shadow-2xl"
              alt="img"
            />
            <div>
              <DayPicker mode="single" selected={date} onSelect={setDate} />
              <p className="text-lg-3xl">
                You have selected: {format(date, "PP")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentBanner;
