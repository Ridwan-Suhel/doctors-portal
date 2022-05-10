import React from "react";
import flouride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const serviceData = [
    {
      _id: 1,
      title: "Fluoride Treatment",
      img: `${flouride}`,
      background: "",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt?",
    },
    {
      _id: 2,
      title: "Cavity Filling",
      img: `${cavity}`,
      background: "",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt?",
    },
    {
      _id: 3,
      title: "Teeth Whitening",
      img: `${whitening}`,
      background: "",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt?",
    },
  ];
  return (
    <section className="my-12">
      <div className="container mx-auto px-4 md:px-0 pb-10">
        <h2 className="text-primary text-2xl text-center uppercase">
          Our services
        </h2>
        <h2 className="text-accent text-4xl text-center mb-10">
          Services We Provide
        </h2>

        <div className="service-card-wrapper md:flex gap-4">
          {serviceData.map((data) => (
            <Service key={data._id} data={data}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
