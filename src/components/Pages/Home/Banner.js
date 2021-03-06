import React from "react";
import chair from "../../../assets/images/chair.png";
import Button from "../../Shared/Button/Button";
import bannerBg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -150px",
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
              <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
              <p className="py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
