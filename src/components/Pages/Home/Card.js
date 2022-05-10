import React from "react";

const Card = ({ info }) => {
  return (
    <div
      className={`p-3 text-white card mt-5 md:mt-0 lg:card-side shadow-xl ${info.background}`}
    >
      <figure>
        <img src={info.img} alt="img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{info.title}</h2>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default Card;
