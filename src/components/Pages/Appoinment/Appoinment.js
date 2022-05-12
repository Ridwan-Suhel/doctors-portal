import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";
const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>

      <Footer></Footer>
    </>
  );
};

export default Appoinment;
