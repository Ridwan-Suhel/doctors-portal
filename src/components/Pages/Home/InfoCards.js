import React from "react";
import Card from "./Card";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const InfoCards = () => {
  const cardInfo = [
    {
      _id: 1,
      title: "Opening Hours",
      img: `${clock}`,
      background: "bg-primary",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt?",
    },
    {
      _id: 2,
      title: "Visit our location",
      img: `${marker}`,
      background: "bg-accent",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt?",
    },
    {
      _id: 3,
      title: "Contact us now",
      img: `${phone}`,
      background: "bg-primary",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, incidunt?",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 md:px-0 pb-10">
        <div className="info-card-wrapper md:flex gap-4">
          {cardInfo.map((info) => (
            <Card key={info._id} info={info}></Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
