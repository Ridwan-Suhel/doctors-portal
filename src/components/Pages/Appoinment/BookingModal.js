import { format } from "date-fns";
import React, { useState } from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, name, _id);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary mb-8">
            Booking For: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              readOnly
              class="input input-bordered w-full"
            />

            <select name="slot" class="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input input-bordered w-full"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              class="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-black-500 w-full uppercase"
            />
          </form>
          {/* <div class="modal-action">
            <label for="booking-modal" class="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
