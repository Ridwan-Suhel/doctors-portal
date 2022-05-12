import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AppoinmentBlock from "./AppoinmentBlock";
import Banner from "./Banner";
import CareBlock from "./CareBlock";
import Contact from "./Contact";
import InfoCards from "./InfoCards";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <CareBlock></CareBlock>
      <AppoinmentBlock></AppoinmentBlock>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default Home;
