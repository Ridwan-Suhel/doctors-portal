import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviewsData = [
    {
      _id: 1,
      name: "Watson JB",
      img: `${people1}`,
      background: "",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Alex Hales",
      img: `${people2}`,
      background: "",
      location: "Miami",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: `${people3}`,
      background: "",
      location: "Pitersberg",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="testi-top flex justify-between">
          <div className="testi-title">
            <h2 className="text-xl text-primary">Testimonial</h2>
            <h2 className="text-3xl">What Our Patients Says</h2>
          </div>
          <img className="w-[170px]" src={quote} alt="" />
        </div>
        <div className="reviews-wrapper md:flex gap-4 mt-10">
          {reviewsData.map((data) => (
            <Review key={data._id} data={data}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
