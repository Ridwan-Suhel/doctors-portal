import React from "react";
import treatment from "../../../assets/images/treatment.png";
import Button from "../../Shared/Button/Button";
const CareBlock = () => {
  return (
    <section className="">
      <div className="container mx-auto lg:px-20">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="pl-0 lg:pl-10">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareBlock;
