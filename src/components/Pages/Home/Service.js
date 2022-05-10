import React from "react";

const Service = ({ data }) => {
  return (
    <div className="card w-full mt-4 bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img src={data?.img} alt="img" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Service;
