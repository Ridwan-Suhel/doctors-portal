import React from "react";

const Review = ({ data }) => {
  return (
    <div class="card w-full mt-4 bg-base-100 shadow-xl border">
      {/* <figure class="px-10 pt-10">
        <img src={data?.img} alt="img" />
      </figure> */}
      <div class="card-body">
        <p>{data.description}</p>
        <div className="card-bottom mt-5 flex">
          <div class="avatar mr-5">
            <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.img} />
            </div>
          </div>
          <div>
            <h2 class="card-title">{data.name}</h2>
            <h2 class="text-xl">{data.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
