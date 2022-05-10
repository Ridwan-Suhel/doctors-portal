import React from "react";

const Review = ({ data }) => {
  return (
    <div className="card w-full mt-4 bg-base-100 shadow-xl border">
      <div className="card-body">
        <p>{data.description}</p>
        <div className="card-bottom mt-5 flex">
          <div className="avatar mr-5">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.img} />
            </div>
          </div>
          <div>
            <h2 className="card-title">{data.name}</h2>
            <h2 className="text-xl">{data.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
