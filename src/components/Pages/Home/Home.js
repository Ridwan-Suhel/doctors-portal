import React from "react";
import Banner from "./Banner";
import CareBlock from "./CareBlock";
import InfoCards from "./InfoCards";
import Services from "./Services";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <CareBlock></CareBlock>
    </main>
  );
};

export default Home;
