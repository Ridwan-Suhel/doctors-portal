import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card p-4 gap-2 items-center rounded-xl shadow shadow-gray-500/50">
      <h3 className="text-xl text-primary">{name}</h3>
      <p className="uppercase">
        {slots.length} {slots.length > 1 ? "spaces" : "space"} available
      </p>

      {slots.length ? (
        <p>{slots[0]}</p>
      ) : (
        <p className="text-red-400">No Slots Available</p>
      )}

      <label
        disabled={slots.length > 0 ? false : true}
        onClick={() => setTreatment(service)}
        htmlFor="booking-modal"
        className="btn btn-primary text-white"
      >
        Booking Modal
      </label>
    </div>
  );
};

export default Service;
