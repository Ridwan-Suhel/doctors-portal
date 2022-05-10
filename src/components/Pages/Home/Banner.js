import React from "react";
import chair from "../../../assets/images/chair.png";
import Button from "../../Shared/Button/Button";
import bannerBg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <section className="">
      <div
        className="container mx-auto"
        style={{
          backgroundImage: `url(${bannerBg}`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
            <div>
              <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
              <p class="py-6">
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
