import React from "react";

const Service = ({ data }) => {
  return (
    <div class="card w-full mt-4 bg-base-100 shadow-xl border">
      <figure class="px-10 pt-10">
        <img src={data?.img} alt="img" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Service;
